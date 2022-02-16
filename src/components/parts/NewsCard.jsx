import React from 'react'
import { Card, Tooltip } from 'antd';
import moment from 'moment'
import { Link } from 'react-router-dom';

const { Meta } = Card;

const NewsCard = (props) => {

   const { style, data } = props

   return data.map((n) => { return (
      <Tooltip placement="topLeft" title={n.title}>
         <Link to={`news/${n.uuid}`}>
            <Card
               key={n.idx}
               style={{ ...{ width: 383 }, ...style }}
               cover={<div style={{ height: 200, overflow: "hidden" }}><img
               alt={"News"}
               style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
               }}
               src={n.thread.main_image}
            /></div>}
            >
               <Meta
                  title={n.title}
                  description={
                     <div>
                        <p>{`${n.text.substr(0, 300)}... `}</p>
                        <p style={styles.dateText}>{moment(n.published).format('L')}</p>
                     </div>}
               />
            </Card>
         </Link>
      </Tooltip>
   )}) 
}

const styles = {
   dateText: {
      position: "absolute",
      bottom: 0,
      right: 20,
      fontWeight: "bold"
   }
}



export default NewsCard
