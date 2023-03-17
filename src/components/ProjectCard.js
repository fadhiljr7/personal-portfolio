import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <a href={link} target="_blank">
          <div className="proj-txtx">
            <h4 style={{color:"white"}}>{title}</h4>
            <span style={{color:"white"}}>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  )
}

// export const ProjectCard = ({ title, description, imgUrl, link,}) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <a href={ProjectCard.link} target="_blank" key={index}>
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//         </a>
//       </div>
//     </Col>
//   )
// }