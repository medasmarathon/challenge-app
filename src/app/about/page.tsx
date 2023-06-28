'use client'

import { Alert, Button, Stack, Typography } from "@mui/material";

export default function About() {
  return (
    <main>
      <Typography sx={{ textAlign: "center", mb: "1rem" }} >Action Alerts</Typography>
      <Stack sx={{ width: '100%' }} spacing={2} >
        <Alert onClose={() => { }}> This is a success alert — check it out! </Alert>
        <Alert
          action={
            <Button color="inherit" size="small" >
              UNDO
            </Button>
          }
        >
          This is a success alert — check it out!
        </Alert>
      </Stack>
    </main>
  )
}