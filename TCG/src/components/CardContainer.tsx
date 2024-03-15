import Card from '../interfaces/Card_Interface';

const CardContainer: React.FC<Card> = card => {
  return (
    <div id="container">
      <p>id: {card.id} name: {card.name} img: {card.img} type: {card.type} subType: {card.subType} manaCost: {card.manaCost} rarity: {card.rarity} text: {card.text} power: {card.power} toughness: {card.toughness}</p>
    </div>
  );
};

export default CardContainer;