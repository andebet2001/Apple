// import { data } from 'jquery'
import React,{useEffect, useState} from 'react';
import "./News.css";



function News() {
    const [NewsItems, getNewsItems]=useState([])
    useEffect(()=>{
        fetch("https://newsapi.org/v2/everything?q=Apple&from=2021-04-17&sortBy=publishedAt&apiKey=00152f9e376c417fb35ab00984703e41")
        .then((Response)=>Response.json())
        .then((data)=>{
            let articles= data.articles;
            articles =articles.slice(0,6);
            getNewsItems(articles);
            
        });
    }, []);

    return (
        <div className="allVideosWrapper">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-12">
                        <div className="title-wrapper">
                            Latest News <br/>
                            <br/>
                            
                        </div>
                        
                    </div>

                    {NewsItems.map((singleNews)=>{
                        let url = singleNews.url;
                        
                       

                        let newsWrapper = (
                            <div key={url} className="col-sm-12 col-md-6 col-lg-4">
                                <div className="singleNews">
                                    <div className="newsThumbnail">
                                    <a href={url} target="_blank">
                                         <img src={singleNews.urlToImage} />
                                    </a>        
                                    </div>
                                    <div className="newsInfoWrapper">
                                        <div className="newsTitle">
                                        <a href={url} target="_blank">
                                             {singleNews.Title}
                                        </a>       
                                        </div>
                                        <div className="newsDesc">
                                        {/* {singleNews.description}*/}
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                        );
                        return newsWrapper;
                    })}
                </div>
            </div>
        </div>
    );
    
    }

    export default News
                

