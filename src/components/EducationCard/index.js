import React from 'react'
import { GiDiploma } from "react-icons/gi";
import { ListItem, ListItemText, ListItemAvatar } from "@material-ui/core";

import InformationDetail from "./components/InformationDetail";

function EducationCard(props) {
  const { item: { title, ...restItem } } = props

  return (
    <ListItem>
      <ListItemAvatar>
        <GiDiploma size={35} />
      </ListItemAvatar>
      <ListItemText primary={title} secondary={<InformationDetail {...restItem} />} />
    </ListItem>
  )
}

EducationCard.defaultProps = {
  item: {}
}

export default EducationCard
