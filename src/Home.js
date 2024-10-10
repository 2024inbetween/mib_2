import React from 'react'
import './Home.css'
//import NewNews from './components/NewNews'
import Date from './components/Date'


function Home() {
  return (
    <div className="Home">
      <div>
        <div style={{width: '100vw', height: 'auto', position: 'relative',marginTop: '100px' }}>
        <img
        src={`${process.env.PUBLIC_URL}/eyecatch.png`}
        alt="Eye Catch"
        style={{
          width: '100%',        // 親要素の幅に合わせる
          height: 'auto',        // アスペクト比を維持して高さを自動調整
          objectFit: 'cover',    // 画像が親要素をカバーする
          objectPosition: 'center', // 画像の中央部分を表示
        }}
      />
        </div>
      </div>
      <div style={{padding:'20px',color: '#00144E', fontSize: 15, fontFamily: 'Hiragino Sans', fontWeight: '300', wordWrap: 'break-word'}}>
      </div>
      {/*<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' ,marginTop: '40px',marginBottom:'80px'}}>
        <NewNews />
      </div>*/}
      <div style={{marginBottom:('80px')}}>
        <Date />
      </div>
      {/*<div style={{marginBottom:('80px')}}>
        <SliderComponent />
      </div>*/}
    </div>
  )
}

export default Home
