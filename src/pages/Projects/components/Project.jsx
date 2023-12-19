import React from "react"
import { Link, Stack, Typography } from "@mui/material"
import toolsData from "../../../pages/Projects/tools.json"
import Atropos from 'atropos/react';
import Gradient from "../../../components/Gradient";

const Project = ({ img, title = "Proyecto", description = "Descripción del proyecto", type, tools = [], url }) => {

  const herramientas = toolsData.filter((tool, index) => tools.includes(tool.nombre))

  return (
    <Atropos activeOffset={50} shadowScale={1.05} shadow highlight >
      <Link href={url} target="_blank" sx={{ textDecoration: "none" }}>
        <Stack alignItems="center"
          height="60vh"
          sx={{
            position: "relative",
            /* border: "1px solid white", */
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            bgcolor: "info.main"
          }}>

          <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" }} />
          <Gradient />


          <Stack id="data" p={3} justifyContent="end" alignItems="center" height="100%" sx={{ zIndex: 2 }}
            data-atropos-offset="5">
            <Typography
              variant="h6"
              bgcolor="tertiary.main"
              color="black.main"
              px={1}>
              {title}
            </Typography>

            <Typography
              variant="subtitle2"
              color="white.main"
              data-atropos-opacity="0;1"

              className="textShadow">
              {type}
            </Typography>

            <Typography
              variant="body2custom"
              className="textShadow"
              sx={{ fontWeight: "400" }}>
              {description.toUpperCase()}
            </Typography>

            <Stack direction="row"
              justifyContent="center"
              spacing={1}
              sx={{ backgroundColor: "#0000000", backdropFilter: "blur(2px)", border: "1px solid cyan", borderRadius: "10px", p: 1 }}>
              {herramientas.map((tool, index) => <Link key={index} href={tool.url} target="_blank" sx={{ textDecoration: "none" }} className="scale">
                <i className={`${tool.icono}`} style={{ fontSize: "2rem" }}></i>
              </Link>)}
            </Stack>
          </Stack>
        </Stack>
      </Link>
    </Atropos>
  )
}

export default Project