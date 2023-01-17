import * as React from "react"
import { Link } from "gatsby"
import './portfolio-section.scss'

const sectionStyle = {
    width: '100vw',
    height: '100vh',
    marginLeft: 'calc(min(var(--maxWidth-wrapper), 100vw)/2 - 50vw - 1.25rem)',
    overflow: 'hidden',
    position: 'relative',
}

const PortfolioSection = ({data}) => {

    const [index, setIndex] = React.useState(0)
    const [isChanging, setIsChanging] = React.useState(false)

    // Sticky Menu Area
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    });

    const handleScroll = (e) => {
        const myref = document.getElementById("portfolio")
        const bottomref = myref.lastChild           /// las child is the bottom div
        const scrollTop = window.scrollY
        window.PrevScrollPos = (window.PrevScrollPos) ? window.PrevScrollPos : 0
        const diff = (scrollTop - window.PrevScrollPos)
        const isScrollDown = (diff>0) ? true : false
        window.PrevScrollPos = scrollTop

        if(scrollTop < (myref.offsetTop + 150) || 
                scrollTop > bottomref.offsetTop) return;

        if(isChanging)
        {
            const yPos = myref.offsetTop+myref.offsetHeight/3
            window.scrollTo(0,yPos)
            window.PrevScrollPos = yPos
            return;
        }

        if( (isScrollDown && index < data.length-1) )
        {
            changeSection(index+1)
        }
        else if(!isScrollDown && index > 0)
        {
            changeSection(index-1)
        }
    }

    const changeSection = (num, e) => {
        if(isChanging) return;
        setIsChanging(true);
        setIndex(num)

        setTimeout(() => {
            setIsChanging(false);
        }, 500);
    }

    return(
    <section style={{height: '175vh', position: 'relative'}} id={"portfolio"}>
    <div className="portfolio-section sticky" style={sectionStyle}>
        <div className="portfolio-text">
            <h3>{data[index].title}</h3>
            <p>{data[index].description}</p>
        </div>
        <div className="portfolio-ambient-overlay"></div>
        <div className="portfolio-images">
            { (data).map( (d, num) => (
                <img key={num} 
                    src={d.image}
                    alt={''}
                    className={(index==num ? 'active' : '')} />
            )) }
        </div>
        <ul className="portfolio-indicator" style={{transform: 'translateY(calc(45% - '+(index*2)+'rem))'}}>
            { (data).map( (d, num) => (
                <li key={num} 
                    onClick={changeSection.bind(this, num)}
                    className={(index==num ? 'active' : '')}></li>
            )) }
        </ul>
    </div>
    <div id="portfolio-bottom"></div>
    </section>
    )
}

export default PortfolioSection
