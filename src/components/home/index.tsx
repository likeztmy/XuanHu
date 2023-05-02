const background = 'http://ru14gqrqf.hb-bkt.clouddn.com/%E8%83%8C%E6%99%AF%E5%BA%95%E5%9B%BE.png'
const header = 'http://ru14gqrqf.hb-bkt.clouddn.com/headerRole.png'
const headerbottom = 'http://ru14gqrqf.hb-bkt.clouddn.com/headerbottom.png'
const gameName = 'http://ru14gqrqf.hb-bkt.clouddn.com/gameName.png'
const sentence1 = 'http://ru14gqrqf.hb-bkt.clouddn.com/sentence1.png'
const QRBox = 'http://ru14gqrqf.hb-bkt.clouddn.com/QRBox.png'
const downloadIcon = 'http://ru14gqrqf.hb-bkt.clouddn.com/downloadIcon.png'
const reference = 'http://ru14gqrqf.hb-bkt.clouddn.com/reference.png'
const rensen = 'http://ru14gqrqf.hb-bkt.clouddn.com/rensen.png'
const box1 = 'http://ru14gqrqf.hb-bkt.clouddn.com/box1.png'
const circle1 = 'http://ru14gqrqf.hb-bkt.clouddn.com/circle1.png'
const item1 = 'http://ru14gqrqf.hb-bkt.clouddn.com/item1.png'
const item2 = 'http://ru14gqrqf.hb-bkt.clouddn.com/item2.png'
const item3 = 'http://ru14gqrqf.hb-bkt.clouddn.com/item3.png'
const item4 = 'http://ru14gqrqf.hb-bkt.clouddn.com/item4.png'
const item5 = 'http://ru14gqrqf.hb-bkt.clouddn.com/item5.png'
const bigItem3 = 'http://ru14gqrqf.hb-bkt.clouddn.com/bigItem3.png'
const box2 = 'http://ru14gqrqf.hb-bkt.clouddn.com/box2.png'
const btnLine =  'http://ru14gqrqf.hb-bkt.clouddn.com/btnLine.png'
const post = 'http://ru14gqrqf.hb-bkt.clouddn.com/post.png'
const postTitle = 'http://ru14gqrqf.hb-bkt.clouddn.com/postTitle.png'
const postTitleBg = 'http://ru14gqrqf.hb-bkt.clouddn.com/postTitleBg.png'
const box3 = 'http://ru14gqrqf.hb-bkt.clouddn.com/box3.png'
const leftBtn = 'http://ru14gqrqf.hb-bkt.clouddn.com/leftBtn.png'
const rightBtn = 'http://ru14gqrqf.hb-bkt.clouddn.com/rightBtn.png'
const introImg1 = 'http://ru14gqrqf.hb-bkt.clouddn.com/introImg.png'
const aboutLink = 'http://ru14gqrqf.hb-bkt.clouddn.com/aboutLink.png'
const downloadBottom = 'http://ru14gqrqf.hb-bkt.clouddn.com/downloadBottom.png'
import './index.less'
import { useEffect, useState } from 'react'

export default function Home() {

    const [slide1,setSlide1] = useState(0)
    const [slide2,setSlide2] = useState(0)

    const [slide3,setSlide3] = useState(0)

    const slideLeft = () => {
        if(slide3 < 400){
            setSlide3(slide3 => slide3+100)
        }
    }

    const slideRight = () => {
        if(slide3 > 0){
            setSlide3(slide3 => slide3-100)
        }
    }



    useEffect(() => {
        const timer1 = setInterval(() => {
            if(slide2 <  400){
                setSlide2(slide2 => slide2 + 100)
            }else {
                setSlide2(0)
            }
        },5000)
        return () => clearInterval(timer1)
    },[slide2])

    useEffect(() => {
        const timer2 = setInterval(() => {
            if(slide3 <  400){
                setSlide3(slide3 => slide3 + 100)
            }else {
                setSlide3(0)
            }
        },5000)
        return () => clearInterval(timer2)
    },[slide3])
    

    return (
        <div className='home-wrapper'>
            <div className='header-wrapper'>
                <div className="header">
                    <img src={header} alt="" />
                </div>
                <div className='header-title'>
                    <img src={gameName} alt="" />
                </div>
                <div className='header-sentence1'>
                    <img src={sentence1} alt="" />
                </div>
                <div className='header-QRBox'>
                    <img src={QRBox} alt="" />
                </div>
                <div className='header-downloadSentence'>
                    扫码下载游戏
                </div>
                <div className='header-downloadIcon'>
                    <img src={downloadIcon} alt="" />
                </div>
                <div className='header-bottom'>
                    <img src={headerbottom} alt="" />
                </div>
            </div>
            <div className='content-wrapper'>
                <div className='background'>
                    <img src={background} alt="" />
                </div>
                <div className="part1-wrapper">
                    <div className='reference-box'>
                        <img src={reference} alt="" />
                    </div>
                    <div className='rensen-box'>
                        <img src={rensen} alt="" />
                    </div>
                    <div className='carousel-box'>
                        <div className='circle1'>
                            <img src={circle1} alt="" />
                        </div>
                        <div className='box1'>
                            <img src={box1} alt="" />
                        </div>
                        <div className='item-list'>
                            <div className='box item-list-item1' style={{transform: `translateX(-${slide1}%)`}} >
                                <img src={item1} alt="" />
                            </div>
                            <div className='box item-list-item2' style={{transform: `translateX(-${slide1}%)`}} >
                                <img src={item2} alt="" />
                            </div>
                            <div className='box item-list-item3' style={{transform: `translateX(-${slide1}%)`}} >
                                <img src={bigItem3} alt="" />
                            </div>
                            <div className='box item-list-item4' style={{transform: `translateX(-${slide1}%)`}} >
                                <img src={item4} alt="" />
                            </div>
                            <div className='box item-list-item5' style={{transform: `translateX(-${slide1}%)`}} >
                                <img src={item5} alt="" />
                            </div>
                        </div>
                        <div className='control-box'>
                            <div className='box control-box-item1' onClick={() => setSlide1(0)}>
                                <img src={item1} alt="" />
                            </div>
                            <div className='box control-box-item2' onClick={() => setSlide1(100)}>
                                <img src={item2} alt="" />
                            </div>
                            <div className='box control-box-item3' onClick={() => setSlide1(200)}>
                                <img src={item3} alt="" />
                            </div>
                            <div className='box control-box-item4' onClick={() => setSlide1(300)}>
                                <img src={item4} alt="" />
                            </div>
                            <div className='box control-box-item5' onClick={() => setSlide1(400)}>
                                <img src={item5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='part2-wrapper'>
                    <div className='carousel-box'>
                        <div className='carousel-box-border'>
                            <img src={box2} alt="" />
                        </div>
                        <div className='btnLine'>
                            <img src={btnLine} alt="" />
                        </div>
                        <div className="carousel-box-content">
                            <div className='item item1' style={{transform: `translateX(-${slide2}%)`}} >
                                <div className='item-post'>
                                    <img src={post} alt="" />
                                </div>
                                <div className='item-content'>
                                    <div className='item-content-titleBg'>
                                        <img src={postTitleBg} alt="" />
                                    </div>
                                    <div className='item-content-title'>
                                        <img src={postTitle} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='item item2' style={{transform: `translateX(-${slide2}%)`}} >
                            <div className='item-post'>
                                    <img src={post} alt="" />
                                </div>
                                <div className='item-content'>
                                    <div className='item-content-titleBg'>
                                        <img src={postTitleBg} alt="" />
                                    </div>
                                    <div className='item-content-title'>
                                        <img src={postTitle} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='item item3' style={{transform: `translateX(-${slide2}%)`}} >
                                <div className='item-post'>
                                    <img src={post} alt="" />
                                </div>
                                <div className='item-content'>
                                    <div className='item-content-titleBg'>
                                        <img src={postTitleBg} alt="" />
                                    </div>
                                    <div className='item-content-title'>
                                        <img src={postTitle} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='item item4' style={{transform: `translateX(-${slide2}%)`}} >
                                <div className='item-post'>
                                    <img src={post} alt="" />
                                </div>
                                <div className='item-content'>
                                    <div className='item-content-titleBg'>
                                        <img src={postTitleBg} alt="" />
                                    </div>
                                    <div className='item-content-title'>
                                        <img src={postTitle} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='item item5' style={{transform: `translateX(-${slide2}%)`}} >
                                <div className='item-post'>
                                    <img src={post} alt="" />
                                </div>
                                <div className='item-content'>
                                    <div className='item-content-titleBg'>
                                        <img src={postTitleBg} alt="" />
                                    </div>
                                    <div className='item-content-title'>
                                        <img src={postTitle} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='control-box'>
                            <div className='box control-box-item1' onClick={() => setSlide2(0)}></div>
                            <div className='box control-box-item2' onClick={() => setSlide2(100)}></div>
                            <div className='box control-box-item3' onClick={() => setSlide2(200)}></div>
                            <div className='box control-box-item4' onClick={() => setSlide2(300)}></div>
                            <div className='box control-box-item5' onClick={() => setSlide2(400)}></div>
                        </div>
                    </div>
                </div>
                <div className='part3-wrapper'>
                    <div className="carousel-box">
                        <div className='carousel-box-border'>
                            <img src={box3} alt="" />
                        </div>
                        <div className="leftBtn" onClick={slideLeft}>
                            <img src={leftBtn} alt="" />
                        </div>
                        <div className="rightBtn" onClick={slideRight}>
                            <img src={rightBtn} alt="" />
                        </div>
                        <div className='carousel-box-content'>
                            <div className='item item1' style={{transform: `translateX(-${slide3}%)`}}>
                                <img src={introImg1} alt="" />
                            </div>
                            <div className='item item2' style={{transform: `translateX(-${slide3}%)`}}>
                                <img src={introImg1} alt="" />
                            </div>
                            <div className='item item3' style={{transform: `translateX(-${slide3}%)`}}>
                                <img src={introImg1} alt="" />
                            </div>
                            <div className='item item4' style={{transform: `translateX(-${slide3}%)`}}>
                                <img src={introImg1} alt="" />
                            </div>
                            <div className='item item5' style={{transform: `translateX(-${slide3}%)`}}>
                                <img src={introImg1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-wrapper'>
                    <div className='aboutLink'>
                        <img src={aboutLink} alt="" />
                    </div>
                    <div className='control-box'>
                        <div className='item item1'></div>
                        <div className='item item2'></div>
                        <div className='item item3'></div>
                        <div className='item item4'></div>
                        <div className='item item5'></div>
                    </div>
                </div>
            </div>
            <div className='downloadBottom'>
                <img src={downloadBottom} alt="" />
            </div>
        </div>
    )
}
