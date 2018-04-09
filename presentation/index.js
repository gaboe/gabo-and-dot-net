// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Image
} from "spectacle";
// Import theme
import createTheme from "spectacle/lib/themes/default";
import "react-simple-flex-grid/lib/main.css";
import { Row, Col } from "react-simple-flex-grid";

const gaboThug = require("./../assets/gabo-thug.png");
const liskov = require("./../assets/liskov.jpg");
const justin = require("./../assets/justin.gif");

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, { primary: "Montserrat", secondary: "Helvetica" });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Gabo &amp; .NET
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Row>
            <Col span={5}>
              <Image src={gaboThug} height={600} />
            </Col>
            <Col offset={1} span={6}>
              <List>
                <ListItem>~2 roky vývoja v .NET</ListItem>
                <ListItem>BLogic</ListItem>
                <ListItem>BSP</ListItem>
                <ListItem>ALOve</ListItem>
                <ListItem>Colorlak</ListItem>
                <ListItem>SummitTrade</ListItem>
              </List>
            </Col>
          </Row>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Stack</Heading>
          <List>
            <ListItem>MSSQL</ListItem>
            <ListItem>ASP MVC</ListItem>
            <ListItem>Typescript</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>DB</Heading>
          <List>
            <ListItem>MSSQL</ListItem>
            <ListItem>Database First</ListItem>
            <ListItem>Local DB</ListItem>
            <ListItem>DB Project</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps>App</Heading>
          <List>
            <ListItem>ASP MVC 5</ListItem>
            <ListItem>SOLID</ListItem>
            <ListItem>Entity Framework</ListItem>
            <ListItem>DI - Autofac</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps>App+DB</Heading>
          <List>
            <ListItem>92% EF</ListItem>
            <ListItem>8% C# Dynamic SQL Queries</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>SOLID</Heading>
          <List>
            <ListItem>5 pravidiel pre písanie testovatelného kódu</ListItem>
            <ListItem>Lepšia udržovatelnosť kódu - Loose coupling </ListItem>
            <ListItem>Menej chýb</ListItem>
            <ListItem>Ľahšia oprava chýb</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>S</Heading>
          <List>
            <ListItem>Single Responsibility Principle</ListItem>
            <ListItem>Trieda má jednu zodpovednosť</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>O</Heading>
          <List>
            <ListItem>Open Closed Principle</ListItem>
            <ListItem>Trieda je otvorená pre rozšírenia a uzatvorená pre zmeny </ListItem>
            <ListItem>Navrhujme obecné interfaces, ktorých implementáciu môžeme meniť</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>L</Heading>
          <List>
            <ListItem>Liskov Substitution Principle</ListItem>
            <ListItem>Rodičovská trieda musí byť nahraditeľná triedou zdedenou</ListItem>
            <ListItem>#CompositionOverInheritance</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Image src={liskov} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>I</Heading>
          <List>
            <ListItem>Interface Segregation Principle</ListItem>
            <ListItem>Ide to aj bez tučných interfaces</ListItem>
            <ListItem>Veľmi súvisí s Open Closed Principle a Single Responsibility Principle</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>D</Heading>
          <List>
            <ListItem>Dependency Inversion Principle</ListItem>
            <ListItem>Potrebné služby by trieda mala dostať ako dependencies (v konštruktore)</ListItem>
            <ListItem>Výborný pomocník pri testovaní - Autofac + Moq</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>Ďakujem za pozornosť</Heading>
          <Image src={justin} width={600} />
        </Slide>
      </Deck>
    );
  }
}
