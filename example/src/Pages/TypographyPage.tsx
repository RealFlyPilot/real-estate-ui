import React from 'react'

import { Stack, Box, Card, Text } from 'real-estate-ui'
export interface TypographyPageProps {}

export const TypographyPage: React.SFC<TypographyPageProps> = () => {
  return (
    <Stack>
      <Box>
        <Card>
          <Text>Typography</Text>
          <Card.Body>
            <div>
              <Box>
                <h3>Headings</h3>
                <h1>h1. Heading 1</h1>
                <h2>h2. Heading 2</h2>
                <h3>h3. Heading 3</h3>
                <h4>h4. Heading 4</h4>
                <h5>h5. Heading 5</h5>
                <h6>h6. Heading 6</h6>
              </Box>
              <Box>
                <h3>Texts</h3>
                <p className='muted'>
                  Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p className='text-warning'>
                  Etiam porta sem malesuada magna mollis euismod.
                </p>
                <p className='text-danger'>
                  Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p className='text-info'>
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis.
                </p>
                <p className='text-success'>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </p>
              </Box>

              <hr />

              <Box>
                <h3>Sample text with lead body</h3>
                <p className='lead'>
                  Lead body. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur bibendum ornare dolor, quis ullamcorper ligula
                  sodales at. Nulla tellus elit, varius non commodo eget, mattis
                  vel eros. In sed ornare nulla.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur bibendum ornare dolor, quis ullamcorper ligula
                  sodales at. Nulla tellus elit, varius non commodo eget, mattis
                  vel eros. In sed ornare nulla.
                </p>
              </Box>
              <Box>
                <h3>Sample text</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur bibendum ornare dolor, quis ullamcorper ligula
                  sodales at. Nulla tellus elit, varius non commodo eget, mattis
                  vel eros. In sed ornare nulla.
                </p>
                <p>
                  Nullam quis risus eget urna mollis ornare vel eu leo. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Nullam id dolor id nibh ultricies
                  vehicula ut id elit.
                </p>
                <p>
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor. Duis mollis, est non commodo luctus, nisi erat
                  porttitor ligula, eget lacinia odio sem nec elit. Donec sed
                  odio dui.
                </p>
              </Box>

              <hr />

              <Box>
                <h3>Address</h3>
                <Card color='light'>
                  <Card.Body>
                    <address>
                      <strong>Vandalay Industries</strong>
                      <br />
                      123, Fake Street
                      <br />
                      San Antonio, Texas <br />
                      <abbr title='Phone'>P:</abbr> (123) 123-1234
                    </address>
                    <address>
                      <strong>Full Name</strong>
                      <br />
                      <a href='mailto:#'>first.last@email.com</a>
                      <br />
                      <br />
                      <strong>Web Address</strong>
                      <br />
                      <a href='!#'>www.google.com</a>
                    </address>
                  </Card.Body>
                </Card>
              </Box>
              <Box>
                <h3>Some more text here</h3>
                <p>
                  Nullam quis risus eget urna mollis ornare vel eu leo. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Nullam id dolor id nibh ultricies
                  vehicula ut id elit.
                </p>
                <hr />
                <h4> Alignments </h4>
                <p className='text-left'>Left aligned text.</p>
                <p className='text-center'>Center aligned text.</p>
                <p className='text-right'>Right aligned text.</p>
              </Box>

              <hr />

              <Box>
                <h3> Blockquotes </h3>
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula integer posuere erat a
                    ante.
                  </p>
                </blockquote>
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <small>
                    Someone famous{' '}
                    <cite title='Source Title'>Source Title</cite>
                  </small>
                </blockquote>
                <div className='clearfix'>
                  <blockquote className='pull-right'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <small>
                      Someone famous{' '}
                      <cite title='Source Title'>Source Title</cite>
                    </small>
                  </blockquote>
                </div>
              </Box>

              <hr />

              <Box>
                <h3>Description lists</h3>
                <dl>
                  <dt>Description lists</dt>
                  <dd>A description list is perfect for defining terms.</dd>
                  <dt>Euismod</dt>
                  <dd>
                    Lorem Vestibulum id ligula porta felis euismod semper eget
                    lacinia odio sem nec elit.
                  </dd>
                  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                  <dt>Malesuada porta</dt>
                  <dd>Ipsum Etiam porta sem malesuada magna mollis euismod.</dd>
                </dl>
              </Box>
            </div>
          </Card.Body>
        </Card>
      </Box>
      <Box>
        <Card>
          <Text>Unordered Lists</Text>
          <Card.Body>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>
                Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </Card.Body>
        </Card>
        <Card>
          <Text>Ordered Lists</Text>
          <Card.Body>
            <ol>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit</li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ol>
          </Card.Body>
        </Card>
        <Card>
          <Text>Unstyled Lists</Text>
          <Card.Body>
            <ul className='list-unstyled'>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>
                Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Nulla volutpat aliquam velit</li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </Card.Body>
        </Card>
        <Card>
          <Text>Inline Lists</Text>
          <Card.Body>
            <ul className='list-inline'>
              <li>1. Lorem</li>
              <li>2. Ipsum</li>
              <li>3. Dolor</li>
              <li>4. Ament</li>
              <li>5. Bucket</li>
              <li>6. Theme</li>
            </ul>
          </Card.Body>
        </Card>
        <Card>
          <Text>Text Colors</Text>
          <Card.Body>
            <p className='text-muted'>Muted text Sample</p>
            <p className='text-primary'>Primary text Sample</p>
            <p className='text-success'>Success text Sample</p>
            <p className='text-info'>Info text Sample</p>
            <p className='text-warning'>Warning text Sample</p>
            <p className='text-danger'>Danger text Sample</p>
          </Card.Body>
        </Card>
      </Box>
    </Stack>
  )
}
