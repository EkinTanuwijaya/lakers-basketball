import { Card } from 'antd';
import { useState } from 'react';
const { Meta } = Card;

interface CardTemplateV2Interface{
  title?:string;
  description?:string;
  avatar?:string
  number?:number
  show?:boolean
  id:number
  currentId:number
  setId : React.Dispatch<React.SetStateAction<number>>;
  setShow : React.Dispatch<React.SetStateAction<boolean>>;
}
const CardTemplateV2 = (
    {
        title,
        description,
        avatar,
        number,
        setShow,
        show,
        setId,
        id,
        currentId
    }:CardTemplateV2Interface) => {
    const [numberVisible, setNumberVisible] = useState(false)

    const handleMouseHover = () => {
        setNumberVisible(!numberVisible);
    };

    const handleMouseClick = () =>{
        setId(id);
        if(currentId == id || currentId == -1){
            if(currentId == -1){
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            setShow(!show);
        }else{
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if(show == false){
                setShow(!show);
            }
        }
    }
      
      const numberStyle: React.CSSProperties = {  
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '70px',
        color: '#4a2381',
        fontWeight: 'bold',
        padding:0,
        margin:0
      };
  return (
    <>
        <a 
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}
            onClick={handleMouseClick}>
            <Card
                style={{ opacity: numberVisible ? 0.07 : 1
                    , backgroundColor:numberVisible ? 'rgb(252, 185, 34)' : 'white'
                        ,border: currentId == id ? show?'1px solid #000000':'none' :'none'}}
                cover={<img alt="example" src={avatar} style={{ width: "300px"}}/>}
                
            >
                <Meta title={title} description={description} />
            </Card>
            <div style={{ ...numberStyle, opacity: numberVisible ? 1 : 0}}>{number}</div>
        </a>
      
        
    </>
  );
};

export default CardTemplateV2;