import { Table } from "antd";

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
      url: "https://chatmindai.ucaiji.com/",
      comment: "支持GPT4",
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
  ];

  return <Table dataSource={dataSource} columns={columns} bordered tableLayout={"fixed"} />;
}
