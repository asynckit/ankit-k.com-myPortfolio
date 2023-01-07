import React from "react";
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                {/* <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href="lol"></LinkItem>
                </LinkColumn> */}
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem mailto="lol">You can contact me on linkedin</LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>On a Journey of Learning to build softwares that impacts lives of billion!</Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons
                        href="https://github.com/realawesomeankit"
                        target="_blank"
                    >
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons
                        href="https://linkedin.com/in/asynckit"
                        target="_blank"
                    >
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                    <SocialIcons
                        href="https://youtube.com/@hypercoder1"
                        target="_blank"
                    >
                        <AiFillYoutube size="3rem" />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
