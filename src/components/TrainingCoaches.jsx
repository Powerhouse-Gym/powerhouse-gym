import React from 'react';
import { Card, CardContent, Typography, Box, Grid, List, ListItem } from '@mui/material';


const TrainingCoaches = () => {

    const coaches = [
        {
          name: "Bri Guiste",
          bio: "My name is Bri, and I have been playing softball since I was 4 years old...",
          highSchoolCareer: [
            "2010 Idaho 5A State Champion",
            "3 time First Team All-Conference",
            "3 time team Defensive player of the year",
            "4 years on Varsity as the leadoff hitter and starting 2nd baseman"
          ],
          collegeCareer: [
            "DI scholarship to Bradley University in Peoria, IL",
            "2014 Missouri Valley Conference (MVC) Champion",
            "2014 MVC All-Tournament team",
            "Finished career as one of three players to rank in Bradley’s career top 10 in hits, runs and stolen bases",
            "2 years as leadoff hitter and led team in hits as a junior and senior"
          ],
          favoriteQuote: "Hard work beats talent when talent doesn't work hard. — Tim Notke"
        },
        {
          name: "Aden Velasquez",
          highSchoolCareer: [
            "Aden attends Cabot High School in Cabot, AR.",
            "Aden has been a Varsity starter all 3 years as a pitcher and middle infielder.",
            "6A Central ALL-CONFERENCE in 2022 and 2023",
            "6A Central ALL-STATE in 2023",
            "Leading the Cabot Panthers to 6A Central Conference Victory in 2023"
          ],
          baseballCareer: [
            "Aden played 4 summers for Prospects, and 2 summers with Sticks.",
            "Aden currently pitches for the Sticks 17U White Sox National Scout Team."
          ],
          collegeCareer: "Committed to University of Central Arkansas",
          personal: "Aden loves baseball, and has committed himself to teaching and passing all his baseball knowledge and experiences onto young ball players.",
          favoriteQuote: "Do not let your heart be troubled. I am the way, the truth, and the life. — Jesus Christ"
        },
        {
          name: "Brooke Brewer",
          bio: "My name is Brooke Brewer and I am so excited to start coaching gymnastics prep/tumbling...",
          gymnasticsCareer: [
            "Gymnastics 2000-2003 (Altus, OK)",
            "Tumbling and Competition cheer 2003-2005 (Hanahan, SC)",
            "YMCA Competition Gymnastics Level 4/5 Coach 2014-2015 (Hinesville, GA)",
            "YMCA Non Competition Gymnastics/Tumbling coach 2014-2015 (Hinesville, GA)",
            "Competition Gymnastics Level 4/5 Coach 2022 (Searcy, AR)"
          ],
          favoriteQuote: "Perfection is not attainable. But if we chase perfection, we can catch excellence. — Vince Lombardi"
        },
        {
          name: "Tyler Hightower",
          bio: "I consider myself a loving husband and father of three children...",
          career: [
            "Coached baseball and softball for seven years",
            "Played a couple seasons of college baseball out of Virginia"
          ],
          personal: "I work hard while guiding athletes to achieve both personally and as a team player.",
          favoriteQuote: "The standard is the standard!"
        },
        {
          name: "Holly Allen",
          bio: "Coach Holly was born and raised in Little Rock, Arkansas...",
          collegeCareer: [
            "2017-18 AMC all-freshman team",
            "2018-19 AMC academic all-conference",
            "2018-19 All-AMC honorable mention",
            "2019-20 All-AMC Third team",
            "2020-21 All-AMC second team",
            "2020-21 AMC academic All-conference"
          ],
          favoriteQuote: "Excellence is not a singular act, but a habit. You are what you repeatedly do."
        }
      ];
      

    return ( 
        <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        {coaches.map((coach, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card variant="outlined" sx={{ backgroundColor: '#f9f9f9' }}>
              <CardContent>
                {/* Coach Name */}
                <Typography variant="h5" component="div" gutterBottom>
                  {coach.name}
                </Typography>

                {/* Bio */}
                {coach.bio && (
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {coach.bio}
                  </Typography>
                )}

                {/* High School Career */}
                {coach.highSchoolCareer && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6">High School Career</Typography>
                    <List>
                      {coach.highSchoolCareer.map((achievement, i) => (
                        <ListItem key={i}>
                          <Typography variant="body2">{achievement}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}

                {/* College Career */}
                {coach.collegeCareer && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6">College Career</Typography>
                    {Array.isArray(coach.collegeCareer) ? (
                      <List>
                        {coach.collegeCareer.map((achievement, i) => (
                          <ListItem key={i}>
                            <Typography variant="body2">{achievement}</Typography>
                          </ListItem>
                        ))}
                      </List>
                    ) : (
                      <Typography variant="body2">{coach.collegeCareer}</Typography>
                    )}
                  </Box>
                )}

                {/* Baseball Career */}
                {coach.baseballCareer && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6">Baseball Career</Typography>
                    <List>
                      {coach.baseballCareer.map((achievement, i) => (
                        <ListItem key={i}>
                          <Typography variant="body2">{achievement}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}

                {/* Gymnastics Career */}
                {coach.gymnasticsCareer && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6">Gymnastics Career</Typography>
                    <List>
                      {coach.gymnasticsCareer.map((achievement, i) => (
                        <ListItem key={i}>
                          <Typography variant="body2">{achievement}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}

                {/* Other Career */}
                {coach.career && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6">Career</Typography>
                    <List>
                      {coach.career.map((achievement, i) => (
                        <ListItem key={i}>
                          <Typography variant="body2">{achievement}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}

                {/* Personal */}
                {coach.personal && (
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    <strong>Personal:</strong> {coach.personal}
                  </Typography>
                )}

                {/* Favorite Quote */}
                {coach.favoriteQuote && (
                  <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    <strong>Favorite Quote:</strong> {coach.favoriteQuote}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
     );
}
 
export default TrainingCoaches;