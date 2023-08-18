const background = 'http://xuanhu.likeztmy.xyz/%E8%83%8C%E6%99%AF%E5%BA%95%E5%9B%BE.png'
const header = 'http://xuanhu.likeztmy.xyz/headerRole.png'
const headerbottom = 'http://xuanhu.likeztmy.xyz/headerbottom.png'
const gameName = 'http://xuanhu.likeztmy.xyz/gameName.png'
const sentence1 = 'http://xuanhu.likeztmy.xyz/sentence1.png'
const QRBox = 'http://xuanhu.likeztmy.xyz/QRBox.png'
const downloadIcon = 'http://xuanhu.likeztmy.xyz/downloadIcon.png'
const reference = 'http://xuanhu.likeztmy.xyz/reference.png'
const box1 = 'http://xuanhu.likeztmy.xyz/box1.png'
const circle1 = 'http://xuanhu.likeztmy.xyz/circle1.png'
const item1 = 'http://xuanhu.likeztmy.xyz/item1.png'
const item2 = 'http://xuanhu.likeztmy.xyz/item2.png'
const item3 = 'http://xuanhu.likeztmy.xyz/item3.png'
const item4 = 'http://xuanhu.likeztmy.xyz/item4.png'
const item5 = 'http://xuanhu.likeztmy.xyz/item5.png'
const bigItem1 = 'http://xuanhu.likeztmy.xyz/bigItem1.png'
const bigItem2 = 'http://xuanhu.likeztmy.xyz/bigItem2.png'
const bigItem3 = 'http://xuanhu.likeztmy.xyz/bigItem3.png'
const bigItem4 = 'http://xuanhu.likeztmy.xyz/bigItem4.png'
const bigItem5 = 'http://xuanhu.likeztmy.xyz/bigItem5.png'
const box2 = 'http://xuanhu.likeztmy.xyz/box2.png'
const btnLine = 'http://xuanhu.likeztmy.xyz/btnLine.png'
const post = 'http://xuanhu.likeztmy.xyz/post.png'
const part2Post1 = 'http://xuanhu.likeztmy.xyz/part2Img1.jpg'
const part2Post2 = 'http://xuanhu.likeztmy.xyz/part2Img2.jpg'
const part2Post3 = 'http://xuanhu.likeztmy.xyz/part2Img3.jpg'
const part3Post1 = 'http://xuanhu.likeztmy.xyz/part3Img1.jpg'
const part3Post2 = 'http://xuanhu.likeztmy.xyz/part3Img2.jpg'
const postTitle = 'http://xuanhu.likeztmy.xyz/postTitle.png'
const postTitleBg = 'http://xuanhu.likeztmy.xyz/postTitleBg.png'
const box3 = 'http://xuanhu.likeztmy.xyz/box3.png'
const leftBtn  = 'http://xuanhu.likeztmy.xyz/leftBtn.png'
const rightBtn = 'http://xuanhu.likeztmy.xyz/rightBtn.png'
const introImg1 = 'http://xuanhu.likeztmy.xyz/introImg.png'
const aboutLink = 'http://xuanhu.likeztmy.xyz/aboutLink.png'
const downloadBottom = 'http://xuanhu.likeztmy.xyz/downloadBottom.png'
const QRCode = 'http://xuanhu.likeztmy.xyz/QRCode.png'
import './index.less'
import { useEffect, useState } from 'react'


export default function Home() {

    const [isMobile,setIsMobile] = useState(false)
    const [texts] = useState([
        [
            '龙葵',
            '茎直立，多分枝，球形浆果，成熟后为黑紫色，茄科茄属植物，全株入药',
            '散瘀消肿，清热解毒，活血，抗氧化功能强',
            '全中国均有分布。广泛分布于欧、亚、美洲的温带至热带地区',
        ],
        [
            '枇杷',
            '小枝粗壮，有绣色或灰棕色的茸毛，叶片呈倒披针形，果实呈球形或长圆形，属蔷薇科苹果亚科枇杷属的常绿乔木植物',
            '止渴、润燥、清肺、止咳，《本草纲目》中记载：“枇杷叶气薄味厚，阳中之阴，治肺胃之病”',
            '分布于长江流域以南，多在低山丘陵及平原地区栽培'
        ],
        [
            '人参',
            '人参味甘、微苦，微温，归脾、肺、心、肾经，为五加科植物人参的干燥根和根茎，被誉为“百草之王”',
            '大补元气，复脉固脱，补脾益肺，生津养血， 安神益智',
            '主产于吉林、辽宁、黑龙江',
        ],
        [
            '枸杞',
            '枝条细弱，弓状弯曲或俯垂，叶片呈卵形，果实为卵状浆果红色。李时珍曾说：“枸杞为两种树的合名，如枸棘，茎如杞柳之条，故兼名之曰枸杞。”',
            '养肝，滋肾，润肺，补虚益精，清热明目，是药食同源的营养保健型蔬菜和名贵中药',
            '起源于中国，多分布于温带和亚热带地区，中国北方多数省区都有栽培'
        ],
        [
            '灵芝',
            '菌盖木质，木栓质，扇形，具沟纹，肾形、半圆形，面褐黄色或红褐色，血红至栗色',
            '清肝毒、降肝火、提高人体免疫力、增强新陈代谢，是中国传统的扶正固本、滋补强壮的名贵药材',
            '生长在热带、亚热带和温带地区，中国是灵芝真菌资源分布广泛的地方'
        ]
    ])
    const [slide1, setSlide1] = useState(0)
    const [slide2, setSlide2] = useState(0)

    const [slide3, setSlide3] = useState(0)

    const slideLeft = () => {
        if (slide3 < 400) {
            setSlide3(slide3 => slide3 + 100)
        }
    }

    const slideRight = () => {
        if (slide3 > 0) {
            setSlide3(slide3 => slide3 - 100)
        }
    }


    useEffect(() => {
        const info = navigator.userAgent;
        const isPhone = /mobile/i.test(info);
        if (isPhone) {
            setIsMobile(true)
            alert('请使用电脑打开以获得更好的体验')
        } else {
            setIsMobile(false)
        }
    },[])

    useEffect(() => {
        const timer1 = setInterval(() => {
            if (slide2 < 400) {
                setSlide2(slide2 => slide2 + 100)
            } else {
                setSlide2(0)
            }
        }, 5000)
        return () => clearInterval(timer1)
    }, [slide2])

    useEffect(() => {
        const timer2 = setInterval(() => {
            if (slide3 < 400) {
                setSlide3(slide3 => slide3 + 100)
            } else {
                setSlide3(0)
            }
        }, 5000)
        return () => clearInterval(timer2)
    }, [slide3])


    return (
        <>
            {!isMobile&&<div className='home-wrapper'>
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
                    <div className='header-downloadTip'>
                        请用浏览器扫码下载!
                    </div>
                    <div className='header-QRCode'>
                        <img src={QRCode} alt="" />
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
                        <div className='active-item-text'>
                            <div className='active-item-name'>{`药材：${texts[slide1 / 100][0]}`}</div>
                            <div className='text-box'>
                                <div className='text-title'>药材概述</div>
                                <div className='active-item-abstract'>{texts[slide1 / 100][1]}</div>
                            </div>
                            <div className='text-box'>
                                <div className='text-title'>主要功效</div>
                                <div className='active-item-function'>{texts[slide1 / 100][2]}</div>
                            </div>
                            <div className='text-box'>
                                <div className='text-title'>主要产地</div>
                                <div className='active-item-home'>{texts[slide1 / 100][3]}</div>
                            </div>
                        </div>
                        <div className='carousel-box'>
                            <div className='circle1'>
                                <img src={circle1} alt="" />
                            </div>
                            <div className='box1'>
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
                                <img src={box1} alt="" />
                            </div>
                            <div className='item-list'>
                                <div className='box item-list-item1' style={{ transform: `translateX(-${slide1}%)` }} >
                                    <img src={bigItem1} alt="" />
                                </div>
                                <div className='box item-list-item2' style={{ transform: `translateX(-${slide1}%)` }} >
                                    <img src={bigItem2} alt="" />
                                </div>
                                <div className='box item-list-item3' style={{ transform: `translateX(-${slide1}%)` }} >
                                    <img src={bigItem3} alt="" />
                                </div>
                                <div className='box item-list-item4' style={{ transform: `translateX(-${slide1}%)` }} >
                                    <img src={bigItem4} alt="" />
                                </div>
                                <div className='box item-list-item5' style={{ transform: `translateX(-${slide1}%)` }} >
                                    <img src={bigItem5} alt="" />
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
                                <div className='item item1' style={{ transform: `translateX(-${slide2}%)` }} >
                                    <div className='item-post'>
                                        <img src={part2Post1} alt="" />
                                    </div>
                                </div>
                                <div className='item item2' style={{ transform: `translateX(-${slide2}%)` }} >
                                    <div className='item-post'>
                                        <img src={part2Post2} alt="" />
                                    </div>
                                </div>
                                <div className='item item3' style={{ transform: `translateX(-${slide2}%)` }} >
                                    <div className='item-post'>
                                        <img src={part2Post3} alt="" />
                                    </div>
                                </div>
                                <div className='item item4' style={{ transform: `translateX(-${slide2}%)` }} >
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
                                <div className='item item5' style={{ transform: `translateX(-${slide2}%)` }} >
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
                                <div className='item item1' style={{ transform: `translateX(-${slide3}%)` }}>
                                    <img src={part3Post1} alt="" />
                                </div>
                                <div className='item item2' style={{ transform: `translateX(-${slide3}%)` }}>
                                    <img src={part3Post2} alt="" />
                                </div>
                                <div className='item item3' style={{ transform: `translateX(-${slide3}%)` }}>
                                    <img src={introImg1} alt="" />
                                </div>
                                <div className='item item4' style={{ transform: `translateX(-${slide3}%)` }}>
                                    <img src={introImg1} alt="" />
                                </div>
                                <div className='item item5' style={{ transform: `translateX(-${slide3}%)` }}>
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
                <div className='download-box'>
                    <div className='downloadBottom'>
                        <img src={downloadBottom} alt="" />
                    </div>
                    <div className='QRCodeBottom'>
                        <img src={QRCode} alt="" />
                    </div>
                </div>
            </div>}
        </>
    )
}
