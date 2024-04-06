import Link from 'next/link';

const TopNav = ({ style, rtl }) => {
  return (
    <div className={`top-navbar style-${style}`}>
      <div className="container">
        <div className="content text-white">
          <small className="op-10 fs-10px">
           Quarry King - The Ultimate Quarry And Crusher SoftWare
          </small>
        </div>
      </div>
    </div>
  );
}

export default TopNav