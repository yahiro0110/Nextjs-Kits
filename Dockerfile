# ベースイメージの指定
FROM node:22-alpine

# 必要なツールのインストール
RUN apk add --no-cache curl

# 作業ディレクトリの設定
WORKDIR /var/www

# パッケージ定義ファイルをコピー（プロジェクトルートから）
COPY ./client/package.json ./client/package-lock.json ./

# 依存関係のインストール
RUN npm install

# アプリケーションコードをコピー（srcディレクトリ全体）
COPY ./client/src ./client/src

# ポートの公開
EXPOSE 3000 5173

# コンテナ起動時に実行するコマンド
CMD ["npm", "run", "dev"]