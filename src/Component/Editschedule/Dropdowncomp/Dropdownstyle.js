import styled from "styled-components";

const Dropdown = styled.div`
position: absolute;
z-index: 2;
padding: 14px 0;
width: 356px;
background: #ffffff;
border: 1px solid #e8e8ea;
border-radius: 5px;
div {
  padding: 6px 0 5px 26px;
  font-size: 16px;
  line-height: 116%;
  &:hover {
    background-color: #5375e2;
    color: #fff;
  }
}
`;

export default Dropdown;