# R6 2 月新規向け

```mermaid
graph LR

    subgraph s3[その他の技術]
        subgraph s3-1[Git]
            F[サル先生のGit入門]
            F2[GitHub]
        end
        Docker
        クラウド
    end

    subgraph s1[サーバ側の技術]
        subgraph s1-1[Next.js]
            A[Next.js公式サイト]
        end

        subgraph s2-5[Node.js]

        end
        subgraph s2-4[TypeScript]
            E3[サバイバルTypeScript]
        end
        subgraph s1-2[React]
            B[React公式サイト]
        end
    end

    subgraph s2[クライアント側の技術]
        subgraph s2-1[HTML]
            C[MDN Web Docs]
            end
        subgraph s2-2[CSS]
            D[MDN Web Docs]
            D2[Tailwind]
        end
        subgraph s2-3[JavaScript]
            E[MDN Web Docs]
            E2[js-lecture 本リポジトリ]

        end
    end



    G[サイトの作成]

    subgraph s5[サイトの公開]
        H1[Cloudflare Pages/Worker]
        H2[Vercel]
    end

    s1 --> G
    s2 --> G
    s3 --> G



    s2-5 --> s2-4

    G --> s5
```

- リンク一覧
  "https://nextjs.org/docs"
  "https://ja.react.dev/learn"
  "https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML"
  "https://developer.mozilla.org/ja/docs/Learn/CSS/First_steps"
  "https://tailwindcss.com/docs"
  "https://developer.mozilla.org/ja/docs/Web/JavaScript"
  "https://backlog.com/ja/git-tutorial/"
  "https://typescriptbook.jp/"
  "https://pages.cloudflare.com/"
  "https://vercel.com/"

## 2/8 の復習

- Next.js の開発サーバーを開始する

上のタブ一覧からターミナルを開き、
`npm run dev`
と入力する

> node,npm,npx コマンドについては、[nodejs.md](../0.環境構築/nodejs.md)を参照

- Next.js のページを作成する

`app/page.tsx`の中を編集する
