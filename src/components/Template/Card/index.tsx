import { Avatar, Card } from 'antd';

const { Meta } = Card;

interface CardTemplateInterface{
  title:string;
  description?:string;
  avatar?:string
}
const CardTemplate = ({title,description,avatar}:CardTemplateInterface) => {
  return (
    <>
      <Card style={{ padding:0 }}>
        <Meta
          avatar={<Avatar src={avatar?avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=1"} />}
          title={title}
          description={description? description : ""}
        />
      </Card>
    </>
  );
};

export default CardTemplate;