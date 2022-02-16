import React from 'react'
import { Button, Input } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import RegularSeparator from '../common/RegularSeparator';
import { Link } from 'react-router-dom';
import { useUsers } from '../../hooks/useUsers';

const { Search } = Input;

const Header = (props) => {
  

   const {logout} = useUsers()

   return (
      <div style={props.style} className={'header-container'}>
         <div className={'header-content'}>
            <Link to={`/home`} className={'logo-button'}>
               <img alt={'logo'} height={"100%"} src={"https://i.ya-webdesign.com/images/news-transparent-white-1.png"}/>
            </Link>

            {
               <div style={styles.searcherContainer}>
                  <Search
                     placeholder="Buscar"
                     onSearch={value => props.onSearch(value)}
                     size={"large"}
                  />
                  <RegularSeparator/>
               </div>
            }

            {
               props.title &&
                  <span className={'header-title'}>{props.title}</span>
            }

            <Button
               type="default"
               onClick={logout}
               ghost
               style={{ fontWeight: "bold" }}
               loading={false}
               shape="round"
               icon={
                  <LoginOutlined/>
               }
               size={40}
            >
               <span className={'sesion-button-txt'}>Cerrar sesión</span>
            </Button>
         </div>
      </div>
   )
}

const styles = {
   searcherContainer: {
      display: "flex",
      alignItems: "center",
      width: "60%"
   }
}

export default Header
