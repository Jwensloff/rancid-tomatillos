import './Loading.scss';

function Loading() {
  return (
    <div className='loading-wrapper'>
    <div className='lds-spinner'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <p>Loading...</p>
    </div>
  );
}
export default Loading;
