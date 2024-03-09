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
      <Card style={{ padding:0 ,border: '1px solid rgb(252, 185, 34)', boxShadow: '0 0 10px rgba(252, 185, 34, 0.5)'  }}>
        <Meta
          avatar={<Avatar src={avatar?avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=1"} />}
          title={<span style={{ color: '#4a2381' }}>{title}</span>}
          description={<b>{description? description : ""}</b>}
        />
      </Card>
    </>
  );
};

export default CardTemplate;