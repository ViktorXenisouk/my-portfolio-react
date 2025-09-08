import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import { Home, SportsMartialArts, Computer, Comment, Person2 } from "@mui/icons-material"
import { Link } from "react-router-dom"


const MobileFooter = () => {

    return (
        <BottomNavigation sx={{
            borderTop: '1px solid',
            borderTopColor: 'divider',
            position: 'fixed',
            zIndex: 3,
            bottom: 0,
            left: 0,
            right: 0
        }}>
            <BottomNavigationAction component={Link} to='/' icon={<Home />} label='Main' />
            <BottomNavigationAction component={Link} to='/skills' icon={<SportsMartialArts />} label='Basket' />
            <BottomNavigationAction component={Link} to='/portfolios' icon={<Computer />} label='Basket' />
            <BottomNavigationAction component={Link} to='/reviews' icon={<Comment />} label='Favorite' />
            <BottomNavigationAction component={Link} to='/cv' icon={<Person2 />} label='My Acount' />
        </BottomNavigation>
    )
}

export default MobileFooter