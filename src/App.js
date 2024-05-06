function App() {
  return (
    <div className="wrapper clear">
      <header className="header d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/card.svg" alt="cart" />
            <span>1205 руб.</span>
          </li>
          <li className="mr-30">
            <img
              width={18}
              height={18}
              src="/img/favorite.svg"
              alt="favorite"
            />
            <span className="text-center">Закладки</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/profile.svg" alt="profile" />
            <span>Профиль</span>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex">
          <div className="card">
            <img
              width={133}
              height={112}
              src="img/sneakers/1.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999руб</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/add.svg" alt="add" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
