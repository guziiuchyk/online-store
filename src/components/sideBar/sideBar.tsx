import styles from "./sideBar.module.css"
import React, {ReactNode} from "react"
import {Link} from "react-router-dom";

type PropsType = {
    children: ReactNode
}

type LinkType = {
    link: string,
    title: string,
}

const SideBar: React.FC<PropsType> = ({children}) => {

    const links: LinkType[] = [
        {
            link:"/",
            title:"Home"
        },{
            link:"/categories/test1",
            title:"Test 1"
        },{
            link:"/categories/test2",
            title:"Test 2"
        },{
            link:"/categories/test3",
            title:"Test 3"
        },
    ]

    return (
        <div className={styles.wrapper}>
            <div className={styles.side_bar}>
                {links.map(link => <Link className={styles.side_bar__link} key={link.link} to={link.link}>{link.title}</Link>)}
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default SideBar