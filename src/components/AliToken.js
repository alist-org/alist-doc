import React, { useRef, useEffect } from "react";
import Translate, { translate } from "@docusaurus/Translate";

const AliToken = () => {
  const [src, setSrc] = React.useState("");
  const [token, setToken] = React.useState("");
  const [err, setErr] = React.useState("");
  const [buttonText, setButtonText] = React.useState("Get Token");
  const interval = useRef(null);
  useEffect(() => {
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, []);
  return (
    <div>
      <button
        disabled={buttonText !== "Get Token"}
        className="button button--primary button--lg"
        onClick={() => {
          setButtonText("Waiting...");
          fetch("https://tool.nn.ci/api/alidrive/qr.ts").then((resp) =>
            resp.json().then((res) => {
              if (!res.success) {
                setErr(JSON.stringify(res));
                return;
              }
              setButtonText("Use AliyunDrive APP to scan");
              setSrc(
                `https://api.xhofe.top/qr/?size=200&text=${res.data.codeContent}`
              );
              const _interval = setInterval(() => {
                fetch("https://tool.nn.ci/api/alidrive/ck.ts", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    ck: res.data.ck,
                    t: res.data.t,
                  }),
                }).then((resp) =>
                  resp.json().then((res) => {
                    const result = res.pds_login_result;
                    if (result.refreshToken) {
                      setToken(result.refreshToken);
                      clearInterval(_interval);
                    }
                  })
                );
              }, 2000);
              interval.current = _interval;
            })
          );
        }}
      >
        <Translate>{buttonText}</Translate>
      </button>
      <br />
      {src && (
        <div style={{ margin: "5px" }}>
          <img src={src} />
        </div>
      )}

      {token && (
        <div class="alert alert--success" role="alert">
          {/* <button aria-label="Close" class="clean-btn close" type="button">
            <span aria-hidden="true">copy</span>
          </button> */}
          RefreshToken: <strong>{token}</strong>
        </div>
      )}
      {err && (
        <div class="alert alert--danger" role="alert">
          <strong>Error: </strong>
          {err}
        </div>
      )}
      <div>
        <i>
          <Translate>API is hosted by vercel serverless</Translate>
        </i>
      </div>
    </div>
  );
};

export default AliToken;
