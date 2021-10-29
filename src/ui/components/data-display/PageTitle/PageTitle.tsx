import React from 'react';
import { PageSubtitleStyled, PageTitleContainer, PageTitleStyled } from './PageTitle.style';

export interface PageTitlePorps {
  title: string;
  subtitle?: string | JSX.Element;
};

const PageTitle: React.FC<PageTitlePorps> = ({ title, subtitle }) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{title}</PageTitleStyled>
      <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
};

export default PageTitle;
