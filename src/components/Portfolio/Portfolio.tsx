import React, {PropsWithChildren} from 'react';
import {Fade} from '@successtar/react-reveal';

interface Props {
  shouldReveal: boolean;
}

const Item: React.FC<PropsWithChildren<Props>> = props => {
  return (
    <Fade bottom when={props.shouldReveal}>
      {props.children}
    </Fade>
  );
};

export const Portfolio: React.FC<Props> = props => {
  return (
    <>
      <Item shouldReveal={props.shouldReveal}>
        <h2>Portfolio</h2>
        <p>
          <a href={'https://clevercards.com/'} target={'_blank'} rel="noreferrer">
            CleverCards
          </a>{' '}
          — is a Global Payments Platform which makes it possible for anyone, anywhere, anytime, to be paid instantly.
          Solution in fintech industry around virtual wireless credit cards. I'm responsible for the whole Frontend
          (Angular + React) and Mobile Apps (Ionic/Angular).
        </p>
      </Item>

      <Item shouldReveal={props.shouldReveal}>
        <p>
          <a href={'https://bitcoin-message.com/'} target={'_blank'} rel="noreferrer">
            Bitcoin-message.com
          </a>{' '}
          — my recent open source pet project, utilizing blockchain technology in a fun way :) Uses React+MobX on
          frontend and Firebase(Node.js)+Bitcoin-blockchain on backend. "Save your message in Bitcoin blockchain.
          Forever!". Try it ;)
        </p>
      </Item>

      <Item shouldReveal={props.shouldReveal}>
        <p>
          CleverCards iOS app (before pivot) — "is your very own personalised greeting card store". My main
          responsibility in Cleverbug startup before recent pivot (from B2C to B2B). Raised $10M from investors.
          Recently we signed a contract with eBay (Sears next) on our B2B solution and my Mobile App work
          (native+web-hybrid) used in main pitch.
        </p>
      </Item>

      <Item shouldReveal={props.shouldReveal}>
        <p>
          <a href={'http://newit-soft.ru/page/products/noncash-payments-school/'} target={'_blank'} rel="noreferrer">
            School Catering System
          </a>{' '}
          — huge proprietary SaaS project in catering industry developed from zero. RFID/NFC cards for users, front
          office part, back office part, public terminals with touch interfaces, security turnstiles, own billing,
          payment systems, all that kind of stuff in there.
        </p>
      </Item>

      <Item shouldReveal={props.shouldReveal}>
        <p>
          <a href={'https://gamebomb.ru/'} target={'_blank'} rel="noreferrer">
            Gamebomb.ru
          </a>{' '}
          — one of the biggest social websites about gaming in Russia with 100k visitors daily. All ground-up
          architected and developed by one developer. Has bunch of social features, all games library, reviews, news,
          videos, blogs, streaming and online-chat functionality, social achievements and even home-brew
          DDOS-protection.
        </p>
      </Item>

      <Item shouldReveal={props.shouldReveal}>
        <p>
          <a href={'https://bobrosoft.github.io/literator.io'} target={'_blank'} rel="noreferrer">
            Literator.io
          </a>{' '}
          — "Let's remember best poems together!". One of my open source pet projects. Started with Russian poems,
          English poems are coming soon. Based on (now old) AngularJS (Angular 1) with all best practices on that
          moment, fully covered with Unit and E2E tests. If you have Russian/Ukrainian devs in the team, they will be
          excited to try it :)
        </p>
      </Item>

      <Item shouldReveal={props.shouldReveal}>
        <p>
          <a href={'https://photo505.com/'} target={'_blank'} rel="noreferrer">
            Photo505.com
          </a>{' '}
          — automatic photoshop-like photo effects + face detection (OpenCV)
        </p>
      </Item>
    </>
  );
};
