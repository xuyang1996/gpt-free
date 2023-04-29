import { Alert } from "antd";

export default function SharingText() {
  return (
    <Alert
      message='ChatGPT Sharing'
      description={
        <div>
          <p>表格里面都是目前免费可用的ChatGPT服务，大部分都需要翻墙，欢迎大家使用</p>
          <br />
          <p>
            如果你有其他关于ChatGPT使用或者部署的问题，欢迎点击&nbsp;
            <a href={"https://t.me/+yXZywqQptgE4NjU1"} target={"_blank"} style={{ color: "red" }}>
              [这里]
            </a>
            &nbsp; 加入电报
          </p>
        </div>
      }
      type='info'
    />
  );
}
