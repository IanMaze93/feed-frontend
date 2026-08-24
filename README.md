# The Feed

<img src="./public/logo-feed.png">

**Your news. Your topics. No socials.**

The Feed is a personalized news aggregator designed to give users more control over the content they see.

Traditional social media feeds often mix the content you choose to follow with advertisements, algorithmic recommendations, promoted posts, and other content selected by the platform. The Feed takes a different approach: **you decide what belongs in your feed.**

Users create topics based on what they want to keep up with and add **pointers** to sources related to those topics. The Feed collects stories from those sources and organizes them by topic, creating a focused feed without advertisements or unrelated algorithmic suggestions.

Currently supported sources include:

- **Google News**
- **Reddit**

Additional source types can be added as the project grows.

## How It Works

The basic structure of The Feed is:

**Topic → Pointers → Stories**

For example, a user interested in _Star Wars_ could create a Star Wars topic and add pointers to relevant Google News searches or Reddit communities.

The backend periodically retrieves stories from those pointers, while this frontend provides the interface for viewing and managing the resulting feed.

## Frontend

This repository contains the **frontend application for The Feed**.

It is built with **Next.js** and connects to the separate Feed backend API responsible for topics, pointers, story retrieval, and feed processing.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## Commands

```bash
# Development
pnpm run dev

# Lint
pnpm lint

# Format
pnpm format

# Test
pnpm test
```

## Project Goal

The goal of The Feed is simple:

> **Give users a way to stay informed about the things they care about without needing a traditional social media feed.**

You choose the topics.
You choose the sources.
The Feed brings the stories together.
