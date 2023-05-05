import { Table } from "antd";
import { v4 as uuidv4 } from "uuid";

const columns = [
  {
    title: "地址",
    dataIndex: "url",
    key: "url",
    render: (text) => {
      return (
        <a href={text} target={"_blank"}>
          {text}
        </a>
      );
    },
  },
  {
    title: "备注",
    dataIndex: "comment",
    key: "comment",
  },
];

export default function GptTable() {
  const dataSource = [
    {
      url: "https://chat.forefront.ai/",
      comment: "支持GPT4",
    },
    {
      url: "https://chat-shared.zhile.io/shared.html",
      comment: "多个gpt账号",
    },
    {
      url: "https://poe.com/",
      comment: "支持GPT4",
    },
    {
      url: "https://app.myshell.ai/",
      comment: "支持语音聊天",
    },
    {
      url: "https://15331301428.ai001.live/",
      comment: "",
    },
    {
      url: "https://gpt.ai001.live/",
      comment: "",
    },
    {
      url: "https://hk.ai001.live/",
      comment: "",
    },
    {
      url: "https://chat.aidutu.cn/",
      comment: "",
    },
    {
      url: "https://freegpt.one/",
      comment: "",
    },
    {
      url: "http://xyz996.xyz:8080/",
      comment: "",
    },
    {
      url: "https://c.level06.com/",
      comment: "需要自己配置OPENAI_API_KEY",
    },
  ].map((item) => {
    return {
      url: item.url,
      comment: item.comment,
      key: uuidv4(),
    };
  });

  return <Table dataSource={dataSource} columns={columns} bordered tableLayout={"fixed"} />;
}
