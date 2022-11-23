import React from "react";
import { Container,Image, Grid, SimpleGrid, Group,Avatar,Text, useMantineTheme } from '@mantine/core';
import './Post.scss'

const PRIMARY_COL_HEIGHT = 300;
const Post = ({post})=>{

    const theme = useMantineTheme();
    const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

    return(
      <>
          <div className="Post">

              {/*    ------------------Post Header----------------*/}

              <div className="HeaderPost">
                  <Group>
                      <Avatar
                          src={"https://res.cloudinary.com/dehtpa6ba/image/upload/v1668596070/review_restaurants/album1_spet5e.jpg"}
                          radius="xl"
                          size={50}
                      />

                      <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems:"center"}}>
                              <Text size="md" weight={500}>
                                  Nguyen Van Truyen
                              </Text>
                              <i className="fas fa-caret-right" style={{marginLeft: "8px", marginRight : "8px"}}></i>
                              <Text size="md" weight={500}>
                                  Nguyen Van Truyen
                              </Text>
                          </div>


                          <Text color="dimmed" size="xs">
                              Nguyen Van Truyen
                          </Text>
                      </div>


                  </Group>
              </div>


              {/*    ------------------Post Content----------------*/}
              <div className="PostContent">
                  {/*    ------------------Content----------------*/}
                  <span size="md" >
                      What is Lorem Ipsum?
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </span>

                  {/*    ------------------Image----------------*/}
                  <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>

                      <Image
                          height ={PRIMARY_COL_HEIGHT}
                          radius="md"
                          src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                          alt="Random unsplash image"
                      />
                      <Grid gutter="md">
                          <Grid.Col>
                              <Image
                                  height ={SECONDARY_COL_HEIGHT}
                                  radius="md"
                                  src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                                  alt="Random unsplash image"
                              />
                          </Grid.Col>
                          <Grid.Col span={6}>
                              <Image
                                  height ={SECONDARY_COL_HEIGHT}
                                  radius="md"
                                  src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                                  alt="Random unsplash image"
                              />
                          </Grid.Col>
                          <Grid.Col span={6}>
                              <Image
                                  height ={SECONDARY_COL_HEIGHT}
                                  radius="md"
                                  src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                                  alt="Random unsplash image"
                              />
                          </Grid.Col>
                      </Grid>
                  </SimpleGrid>

                  {/*    ------------------Post Footer----------------*/}
                  <div className="PostFooter">
                      <div className="action">
                          <div className= "action-like">
                              <span>Nguyễn Văn Truyền và 100 người khác</span>
                              <i className="fas fa-heart" style={{color: "#fa6342"}}></i>
                          </div>

                          <div className= "action-comment">
                              <span>100 bình luận</span>
                              <i className="fas fa-comment-dots" style={{color: "#23d2e2"}}></i>
                          </div>
                      </div>

                      <div className= "user-liked">
                          <Avatar.Group spacing="md">
                              <Avatar size="md"  src="https://res.cloudinary.com/dehtpa6ba/image/upload/v1668596070/review_restaurants/album1_spet5e.jpg" radius="xl" />
                              <Avatar size="md"  src="https://res.cloudinary.com/dehtpa6ba/image/upload/v1668596070/review_restaurants/album1_spet5e.jpg" radius="xl" />
                              <Avatar size="md"  src="https://res.cloudinary.com/dehtpa6ba/image/upload/v1668596070/review_restaurants/album1_spet5e.jpg" radius="xl" />
                              <Avatar size="md" radius="xl">+5</Avatar>
                          </Avatar.Group>
                          <span>Bạn và 5 người khác đã thích</span>
                      </div>


                  </div>


              </div>




          </div>
      </>
    )
}

export default Post