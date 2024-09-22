import React from 'react';
import "./News.css";

function News(){
    return(
        <div>
            <img
                src={`${process.env.PUBLIC_URL}/news.png`}
                alt="News Logo"
                style={{
                    width: '40%',        // 親要素の幅に合わせる
                    height: 'auto',        // アスペクト比を維持して高さを自動調整
                    objectFit: 'cover',    // 画像が親要素をカバーする
                    objectPosition: 'center',
                    marginTop:60, 
                }}
            />
            <h1>準備中...</h1>
        </div>
    )
}

export default News;