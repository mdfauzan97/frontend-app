import './App.css';
import Header from './Header/Header';
import ItemList from './ItemList/ItemList';


export type CartItemType = {
  id: number;
  pic: any;
  name: string;
  description: string;
  price: number;
  amount: number;
};



const App = () => {

  /*const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, itemlist) => ack + itemlist.amount, 0);

    const handleAddToCart = (clickedItem: CartItemType) => {
      setCartItems(prev => {
        // 1. Is the item already added in the cart?
        const isItemInCart = prev.find(itemlist => itemlist.id === clickedItem.id);
  
        if (isItemInCart) {
          return prev.map(itemlist =>
            itemlist.id === clickedItem.id
              ? { ...itemlist, amount: itemlist.amount + 1 }
              : itemlist
          );
        }
        // First time the item is added
        return [...prev, { ...clickedItem, amount: 1 }];
      });
    };

    const handleRemoveFromCart = (id: number) => {
      setCartItems(prev =>
        prev.reduce((ack, itemlist) => {
          if (itemlist.id === id) {
            if (itemlist.amount === 1) return ack;
            return [...ack, { ...itemlist, amount: itemlist.amount - 1 }];
          } else {
            return [...ack, itemlist];
          }
        }, [] as CartItemType[])
      );
    };*/


  return (
    <div className="App">
      <Header />
      <ItemList />
    </div>
  );
}

export default App;
