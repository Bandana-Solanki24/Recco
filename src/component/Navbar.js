import React from "react";
import styled from "styled-components";

const Navbar = () => {
  const NavContainer = styled.div`
    background: green;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
  `;

  const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
    align-items: center;
  `;

  const Logo = styled.li`
    color: white;
    font-size: 28px;
    font-family: cursive;
    font-weight: 800;
    text-decoration: none;
    cursor: pointer;
  `;

  const NavLinkItem = styled.li`
    color: white;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `;
  const HelloText = styled.span`
    color: white;
    font-weight: bold;
    margin-left: 10px;
  `;

  const CartIcon = styled.span`
    color: white;
    font-size: 24px;
    cursor: pointer;
  `;
  const CartContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px; /* Add some space between the cart icon and "Hello James" */
  `;
  const OrderDetailsContainer = styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    background: #f2f2f2;
    padding: 10px 20px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  `;

  const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px;
    padding: 10px;
  `;

  const OrderId = styled.span`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  `;

  const BackButton = styled.button`
    background-color: transparent;
    color: black;
    border: 1px solid grey;
    padding: 8px 16px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
  `;

  const ApproveOrderButton = styled.button`
    background-color: green;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
  `;

  return (
    <>
      <NavContainer>
        <NavLinks>
          <Logo>Reeco</Logo>
          <NavLinkItem>Store</NavLinkItem>
          <NavLinkItem>Orders</NavLinkItem>
          <NavLinkItem>Analytics</NavLinkItem>
        </NavLinks>
        <CartContainer>
          <CartIcon>🛒</CartIcon>
          <HelloText>Hello James</HelloText>
        </CartContainer>
      </NavContainer>
      <OrderDetailsContainer>
        <OrderInfo>
          <OrderId>Orders 323493ABD</OrderId>
          <OrderId>Order 323493ABD</OrderId>
        </OrderInfo>
        <OrderInfo>
          <BackButton>Back</BackButton>
          <ApproveOrderButton>Approve Order</ApproveOrderButton>
        </OrderInfo>
      </OrderDetailsContainer>
    </>
  );
};

export default Navbar;
