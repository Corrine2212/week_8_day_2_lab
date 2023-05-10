import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  /* font-size: 13px;
  padding: 5px;
  margin: 10px;
  border: 2px solid lightblue;
  border-radius: 5px; */
  background: #5E5DF0;
  border-radius: 999px;
  box-shadow: #5E5DF0 0 10px 20px -10px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  /* font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif; */
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
  /* margin-left: auto; */
  
`

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid lightgray;
  border-radius: 30px;
  margin: 20px 0px 25px 0px;
  width: 300px;

`
const ItemDetails = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: px 55px;
`
const ItemCont = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 25px 55px;
`

const Images = styled.img`
  height: 220px;
`

const Item = ({ item, addToBasket, isInBasket }) => {

  const onItemAdd = () => {
    addToBasket(item);
  }

  return (
    <ItemContainer>
      <ItemCont>
        <Images src={item.image} alt="Item Image" />
        <ItemDetails>
          <h2><b>{item.name}</b></h2>
          <p><b>Price:</b> £{item.price}</p></ItemDetails>
        {!isInBasket && <Button onClick={onItemAdd}>Add to basket</Button>}
      </ItemCont>
    </ItemContainer>
  );
}


export default Item;