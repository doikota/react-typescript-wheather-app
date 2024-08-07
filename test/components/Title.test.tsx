/**
* @jest-environment jsdom
*/
import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '../../src/components/Title.tsx';
import '@testing-library/jest-dom';

describe('Titleコンポーネントのテスト', () => {
  // titleは"世界の天気"
  const title = '世界の天気';

  test('getBy… と queryBy… を用いて', () => {
    // Titleコンポーネントをレンダリング<body><div><Title /></div></body>
    render(<Title />);
    const getByText1 = screen.getByText(title);
    const queryByText1 = screen.queryByText(title);

    // コンポーネントのHTML構造を確認する
    screen.debug(getByText1);
    if (queryByText1) {
      screen.debug(queryByText1);
    }

    // レンダリングされたコンポーネント内で特定の要素が存在するかを確認
    expect(getByText1).toBeInTheDocument();
    expect(queryByText1).toBeInTheDocument();
  });

  test('findBy… を用いるため、async/awaitでテスト', async () => {
    // Titleコンポーネントをレンダリング<body><div><Title /></div></body>
    render(<Title />);
    const findByText1 = await screen.findByText(title);
    screen.debug(findByText1);
    expect(findByText1).toBeInTheDocument();
  });
});
