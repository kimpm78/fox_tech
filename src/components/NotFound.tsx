import '../App.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="d-flex flex-column align-items-center">
        <img
          className="mt-5"
          src="src/assets/fox-using-laptop_transparent 1.svg"
          alt="404_fox"
        />
        <h1>NOT FOUND</h1>
        <p style={{ fontSize: '20px' }}>
          申し訳ございません。キツネ社長が
          指定されたファイルを探していますが、存在いたしません。
        </p>
      </div>
    </div>
  );
};

export default NotFound;
