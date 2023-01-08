import style from "../../styles/Experience.module.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { styled, ThemeProvider, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { theme } from "../lib/style";

const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

const Experience = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Responsive>
          <div className={style.main}>
            <h1>My Work Experience</h1>
            <div className={style.timeline}>
              <Timeline sx={{ marginLeft: {
                xs: '0rem',
                sm: '0rem'
              } }}>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{
                      position: "relative",
                      right: "3rem",
                      display: {
                        xs: "none",
                        sm: "block",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "600" }}
                      component="span"
                    >
                      Self-Employed, Brisbane
                    </Typography>
                    <Typography>Sep 2016 - Aug 2020</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="success" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "600" }}
                      component="span"
                    >
                      Visual Designer
                    </Typography>
                    <Typography
                      sx={{
                        lineHeight: "1.5",
                        marginTop: "0.5rem",
                        width: "80%",
                      }}
                    >
                      A visual designs for a varity of platforms, which may
                      include internet and internet sites, games, movies, and
                      wearables. In short they create the concepts.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{
                      position: "relative",
                      right: "3rem",
                      display: {
                        xs: "none",
                        sm: "block",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "600" }}
                      component="span"
                    >
                      Self-Employed, Brisbane
                    </Typography>
                    <Typography>Sep 2016 - Aug 2020</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="warning" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "600" }}
                      component="span"
                    >
                      Visual Designer
                    </Typography>
                    <Typography
                      sx={{
                        lineHeight: "1.5",
                        marginTop: "0.5rem",
                        width: "80%",
                      }}
                    >
                      A visual designs for a varity of platforms, which may
                      include internet and internet sites, games, movies, and
                      wearables. In short they create the concepts.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{
                      position: "relative",
                      right: "3rem",
                      display: {
                        xs: "none",
                        sm: "block",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "600" }}
                      component="span"
                    >
                      Self-Employed, Brisbane
                    </Typography>
                    <Typography>Sep 2016 - Aug 2020</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="error" />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "600" }}
                      component="span"
                    >
                      Visual Designer
                    </Typography>
                    <Typography
                      sx={{
                        lineHeight: "1.5",
                        marginTop: "0.5rem",
                        width: "80%",
                      }}
                    >
                      A visual designs for a varity of platforms, which may
                      include internet and internet sites, games, movies, and
                      wearables. In short they create the concepts.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </Responsive>
      </ThemeProvider>
    </>
  );
};

export default Experience;
