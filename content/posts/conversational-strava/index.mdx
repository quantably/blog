---
title: Building StravaTalk - A Natural Language Interface for Strava Data
date: 2025-03-04
tags:
  - AI
  - Strava
  - Python
  - Projects
slug: "/conversational-strava"
---

In the rapidly evolving world of AI agents, finding the right framework can be challenging. After exploring numerous options that often added complexity rather than solving problems, I discovered Atomic Agents - a lightweight, flexible framework that perfectly balances sophistication with simplicity. This weekend project lets me analyze years of Strava workout data through natural language questions.

## The Challenge

As a running enthusiast, I've accumulated years of workout data in Strava. While the platform offers basic analytics, I wanted the ability to query this treasure trove of information using natural language - asking questions like "What was my longest run last month?" or "Show me my average cycling speed this year" without building complex filters or exports.

This weekend project is PoC to explore the capabilities of Atomic Agents, but it demonstrates the potential for more sophisticated applications in the future.

## Enter StravaTalk

<a href="https://github.com/pwxn/StravaTalk" target="_blank">StravaTalk</a> is a conversational interface that lets me analyse my Strava activities using natural language. Built on the Atomic Agents framework, it transforms English questions into database queries and returns human-friendly responses.

![StravaTalk App](../../assets/images/StravaTalk.gif)

## How It Works

The application follows a straightforward workflow:

1. **Data Preparation**: First, I used the Strava API to export my historical workout records to a local SQLite database. This one-time setup provides the foundation for all queries.

2. **Query Processing**: When a user enters a natural language question, it flows through a pipeline of specialised AI agents.

## The Architecture

The application uses a multi-agent architecture with three specialised AI components built with Atomic Agents:

### 1. Classification Agent

This gatekeeper determines if your query can be answered using available Strava data. It analyses the question, identifies what data would be required, and classifies it as:
- SQL-appropriate (can be answered with available data)
- Not SQL-appropriate (requires data we don't have)
- Clarification needed (ambiguous query)

### 2. SQL Agent

For questions that can be answered, this agent converts natural language into optimised SQL queries. It understands the database schema (activities, segments, etc.) and builds queries that accurately represent the user's intent.

### 3. Response Agent

This agent transforms raw database results into human-friendly responses. It formats data with appropriate units (converting metres to kilometres, formatting pace correctly), and presents information in an engaging, motivational way.

## Shared Memory

One of the most powerful features is the shared memory implementation. All agents access the same conversation context, enabling follow-up questions like "How does that compare to last year?" without repeating context.

## Structured Outputs

Thanks to Atomic Agents' integration with [Instructor](https://github.com/jxnl/instructor), the entire system works with strongly typed outputs. This reduces hallucinations and ensures data consistency across the pipeline.

## The Development Experience

What impressed me most about building with Atomic Agents was how quickly I could go from concept to working prototype. The framework strikes an excellent balance between:

- Production-ready features (robust error handling, performance optimisation)
- Developer experience (clean, readable code)
- Flexibility (easy to customise and extend)

I completed the initial version in a single weekend, something that would have taken weeks with many other frameworks.

## Conclusion

StravaTalk demonstrates how modern AI frameworks can transform personal data into conversational insights. While this project focuses on Strava data, the architecture could be applied to any structured dataset. Thanks to frameworks like Atomic Agents, building sophisticated AI applications is becoming increasingly accessible to developers, opening up new possibilities for natural, conversation-driven interfaces.
