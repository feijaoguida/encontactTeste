import styled from "styled-components";

export const Button = styled.button`
  font-weight: 600;
  font-size: 0.8571em;
  line-height: 1.35em;
  text-transform: uppercase;
  border: none;
  margin: 5px 10px;
  border-radius: 3px;
  padding: 11px 22px;
  cursor: pointer;
  transition: all 0.15s linear;
  background-color: #66615b;
  color: #fff;

  :hover {
    outline: 0;
    opacity: 0.9;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
`;

export const SideLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: silver;
`;

export const Menus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const MenuPerfil = styled.button`
  width: 60px;
  height: 60px;
  background-color: red;
  border: 0px;
  margin: 10px;
`;
export const menuHideShow = styled.div``;
export const MenuDrop = styled.div`
  width: 100px;
  overflow: hidden;

  select {
    background: #354880;
    width: 90px;
    height: 48px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    padding: 13px 0px 13px 12px;
    color: #fff;
  }
`;

export const Favorite = styled.div`
  border-top: solid 2px black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1em;
  color: #272727;
`;
export const MenuList = styled.ul`
  position: unset;
  list-style: none;
  margin-top: 20px;
  padding-top: 0;
  padding-left: 0;
  margin-bottom: 0;
  padding-bottom: 0;
`;

export const ItensMenuList = styled.li`
  width: auto;
  margin: 10px 15px 0;
  display: block;
  padding: 10px 15px;
  position: relative;
  transition: all 300ms linear;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.5em;
  border-radius: 3px;
  background-color: transparent;

  box-sizing: border-box;
  text-align: left;
  align-items: center;

  justify-content: flex-start;
  text-decoration: none;

  :hover {
    box-shadow: 0 12px 20px -10px rgba(0, 172, 193, 0.28),
      0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 172, 193, 0.2);
    background-color: #00acc1;
  }
`;

export const SideRigth = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: #00acc1;
`;

export const Search = styled.div`
  background-color: #e0eeee;
  border: solid 1px #5f9ea0;
  border-radius: 10px;
  width: 500px;
  height: 41px;
  margin: 10px auto;

  input {
    float: left;
    background-color: transparent;
    padding-left: 5px;
    font-size: 18px;
    border: none;
    height: 40px;
    width: 405px;
  }

  div {
    margin: 10px 0 0 5px;
    float: left;
  }
`;

export const DivActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  overflow: auto;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-right: 5px;
`;

export const ButtonPrimary = styled(Button)`
  color: #fff;
  background-color: #51cbce;
`;

export const ButtonSave = styled(Button)`
  color: #fff;
  background-color: #6bd098;
`;

export const Filter = styled.div`
  margin-right: 10px;
`;

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f4f3ef;
  min-height: 100%;
  padding: 20px;
`;
export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
`;

export const CardLogo = styled.div``;

export const CardDescription = styled.div``;

export const CardActions = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardUsers = styled.div`
  background-color: cyan;
  color: blue;
  margin-left: -6px;
  font-size: 1.2em;
  border-radius: 50%;
  border: solid 1px blue;
  padding: 5px;
`;
