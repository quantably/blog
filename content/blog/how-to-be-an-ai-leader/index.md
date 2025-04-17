---
title: "Leadership in AI"
date: 2025-04-12
draft: true
# Optional: Add description, tags, banner later
# description: "A brief description"
# tags:
#  - Example
# banner: ./image.jpg
---

Are you struggling to communicate the true capabilities and limitations of AI to stakeholders? Do you find yourself caught between research ambitions and production demands? The reality of leading in the AI space often contrasts sharply with the expectations many bring to the table.

As someone who has navigated these challenges, I've discovered that effective leadership in AI requires a unique set of skills beyond technical expertise. Let me share what I've learned about setting realistic expectations and balancing competing priorities in this dynamic field.

## Managing the Expectation-Reality Gap

### The "Magic Box" Misconception
One of the defining challenges of AI leadership is addressing the "magic box" misconception. Too often, stakeholders approach AI with the notion that you can simply feed in data and receive perfect solutions. The reality is far more nuanced, with substantial limitations that need to be communicated effectively.

In my experience, two areas consistently require expectation management:

### Underestimating Data Preparation Timelines
The sheer amount of time required for acquiring, curating, and cleaning data before any model training can begin is frequently underestimated. This foundational work often represents the largest phase of any ML project.

### The Value of Benchmarking
Explaining why systematic evaluation is crucial rather than simply pushing out new features can be challenging. Without proper benchmarking, we risk deploying models into production without understanding how they'll perform—a strategy that rarely ends well.

## Bridging Business Needs and Technical Realities

### Meeting in the Middle: A Bidirectional Approach to AI Solutions
One of my most significant breakthroughs as an AI leader came when I discovered the power of bidirectional thinking—approaching problems from both business and technical perspectives simultaneously.

For months, I found myself in frustrating meetings trying to get non-technical executives to tell me what precision level or RMSE value we should target for our fraud detection model. I'd present technical slides with ROC curves and confusion matrices, hoping to get a clear target. Their eyes would glaze over, followed by vague responses like "as accurate as possible" or "better than what we have now."

The turning point came during a particularly tense meeting when our CFO finally said, "I don't know what these numbers mean for our business. I just know fraud is costing us £2.3 million annually."

That's when I realised I needed a dual approach.

### From Top-Down Business Needs...
I began asking business-focused questions:

*   "How much are these anomalies/fraudulent transactions costing you right now?"
*   "What would it be worth to automatically detect these issues in minutes rather than days?"
*   "If we could reduce false positives by half, how would that affect your team's workload?"

### ...To Bottom-Up Technical Feasibility
Simultaneously, my team worked from the bottom up:

*   Exploring the available data to understand its quality and limitations
*   Building baseline models to establish what was technically feasible
*   Running experiments to determine realistic performance boundaries

### Finding Value in the Middle Ground
This bidirectional approach created a productive tension. The business perspective pulled us toward ambitious goals, while the technical exploration grounded us in what was achievable with current data and technology.

What proved most valuable was the conversation that happened when these approaches met in the middle. In one instance, our bottom-up exploration revealed we could achieve about 87% precision with our current data—not the 95% stakeholders hoped for. Rather than seeing this as a failure, it sparked a productive discussion about what additional data sources might close that gap or whether 87% precision still delivered enough business value to proceed.

I've found this meeting-in-the-middle philosophy transforms how teams operate. The top-down business perspective keeps technical work focused on valuable outcomes rather than interesting but irrelevant explorations. Simultaneously, the bottom-up technical assessment prevents unrealistic expectations and identifies specific limitations that need addressing.

## Balancing Research Exploration and Production Demands

AI teams typically operate on a spectrum from pure research to applied engineering. As a leader, you need to establish a thoughtful process for transitioning promising research into production-ready systems.

The key tension here lies in protecting your team's ability to explore whilst still meeting business objectives. How do you strike that balance?

### Defining Roles: Research vs. Engineering
In my approach, clearly defined roles have proven essential. By separating research-focused positions from machine learning engineering roles, you can move away from that sliding window between the two, transforming it into a more straightforward resource allocation question.

### Tailoring the Balance to Your Organisation's Stage
This balance shifts according to your organisation's stage:

*   Revenue-generating businesses may allocate more resources to longer-term research
*   Early-stage companies might focus on pragmatic product features with faster ROI

The critical element is explicit communication about this split, securing alignment from stakeholders by clearly articulating expected outcomes from research initiatives.

## Thriving Amidst Rapid Change

Perhaps the most daunting aspect of AI leadership is the breakneck pace of innovation. New papers, models, and techniques emerge constantly, making it impossible to stay on top of everything.

### Cultivating Continuous Learning
The most effective response I've found is cultivating an environment where continuous learning is the norm. This means:

*   Advocating for experimentation
*   Setting aside dedicated time for exploration and learning
*   Creating a culture where pivoting strategies based on new information is acceptable
*   Taking the most pragmatic route forward based on emerging signals

## Challenging Conventional Wisdom in AI Leadership

### Myth #1: Clients Want Cutting-Edge AI (They Just Want Fish)
One of the most surprising realisations I've had in my AI career directly contradicts the conventional wisdom in our field: customers rarely care whether you're using machine learning or not.

**Conventional Wisdom:** Clients want cutting-edge AI solutions that leverage the latest techniques. They want to "learn to fish" with sophisticated models that demonstrate technological prowess.
**Reality:** Most clients just want fish. They care about business outcomes, not the technological means to achieve them.

Early in my career, I'd proudly walk into meetings with detailed presentations about our novel neural network architecture or the sophisticated ensemble methods we were employing. I'd explain our feature engineering approach and the elegance of our model selection process. I thought I was impressing clients with our technical sophistication.

Then came a humbling moment during a project review when a client CIO interrupted my technical explanation and said, "Honestly, I don't care if you're using machine learning or a room full of people with calculators. I just need to know if this will reduce our operational costs by 30% as promised."

That comment fundamentally shifted my perspective. I had been operating under the flawed assumption that the solution must be machine learning and the problem was whatever issue the client happened to have.

In reality, the relationship should be reversed: the problem is fixed and immutable, while the solution should be flexible and pragmatic.

This has led me to a somewhat heretical position in the AI leadership world: sometimes, machine learning is absolutely not the right answer. I've had projects where, after initial data exploration, we abandoned complex predictive models in favour of:

*   Simple rule-based systems that were more explainable and maintainable
*   Deterministic algorithms that performed better than probabilistic approaches
*   Basic statistical methods that achieved 95% of the value with 20% of the complexity

In one particularly memorable case, we replaced a struggling deep learning pipeline with a straightforward decision tree and a set of business rules. The accuracy actually improved, the solution was easier to maintain, and the client was delighted—not disappointed—because their business metrics improved.

What I've learned is that true AI leadership isn't about advocating for the most sophisticated solution; it's about having the wisdom and humility to recognize when simpler approaches are optimal. The best AI leaders I know aren't those with the most complex models in production—they're the ones who deliver the most business value, regardless of the technical approach.

So before automatically reaching for your deep learning toolkit, ask yourself: Does this problem actually require machine learning, or am I just solving for my own technical interests? Your clients might not care either way, as long as they get their fish.

### Myth #2: Success is the Only Goal (Why You Should Celebrate Failure)
Another piece of conventional wisdom I've come to reject is the relentless focus on success metrics in AI initiatives. The ubiquitous celebration of achievements—improved accuracy rates, reduced latency, successful deployments—dominates our industry narratives.

**Conventional Wisdom:** Success is the ultimate goal. Teams should strive to minimize failure and celebrate wins.
**Reality:** Quick failures are among your most valuable assets. If learning is your true goal, failure is often more instructive than success.

I discovered this counterintuitive truth during a six-month project where everything seemed to go perfectly. We hit every milestone, our model performed brilliantly, and the deployment went smoothly. The team was celebrated, bonuses were distributed, and case studies were written.

Yet in our retrospective, I realized something troubling: we hadn't learned much. The smooth execution meant we'd stayed safely within known parameters, avoided risks, and ultimately gained little new knowledge.

Contrast this with a project that spectacularly imploded just three weeks after kickoff. Our initial approach hit a fundamental limitation in the data architecture we hadn't anticipated. The quick failure felt devastating at first—until we realized what a gift it was.

That fast failure taught us:

*   A critical limitation in our data pipeline architecture
*   A fundamental misconception about the problem domain
*   A gap in our stakeholder communication process
*   An opportunity to pivot to a more promising approach

In those three weeks of failure, we learned more than in the entire six-month "successful" project. The team that experienced this rapid failure subsequently built our most innovative solution to date, precisely because they were armed with knowledge that couldn't be gained through success.

I now deliberately structure AI initiatives to fail fast and often—especially in the early stages. We run multiple parallel experiments with the explicit expectation that most will fail. We've even instituted "Failure Friday" sessions where team members share what didn't work and why, with recognition given to the most instructive failures.

This approach requires reframing success itself. If you define success as "the model worked as expected," you'll miss the deeper measure: "the team gained valuable knowledge." When viewed through this lens, a quick failure that eliminates ten potential approaches is far more successful than a working model that teaches nothing new.

This mindset shift has profound implications for AI leadership. It means:

*   Evaluating team performance based on knowledge acquired, not just working models
*   Creating psychological safety for teams to report and analyze failures
*   Designing initiatives with multiple potential failure points to accelerate learning
*   Documenting failures as carefully as successes to build institutional knowledge

The most effective AI leaders I know don't have the most successful projects—they have the most instructive failures. They've built teams that fail quickly, learn deeply, and emerge stronger with each iteration.

So the next time a project fails rapidly, don't commiserate—celebrate. You've just gained something far more valuable than a working model. You've gained knowledge that will inform every future decision, and you've gained it at a fraction of the time and cost it might have taken otherwise.

## The Unsung Hero: Iteration Velocity

### Why Your Team's Speed of Iteration Trumps Everything Else
Perhaps the most powerful insight I've gained leading AI teams isn't revolutionary in theory, but is surprisingly undervalued in practice: the velocity of your test-iterate-validate cycle is the single greatest predictor of a team's impact.

This isn't just about working faster—it's about fundamentally rethinking how we measure team effectiveness.

### Shifting Focus from Lagging to Leading Indicators
Most organisations focus on lagging indicators: model accuracy, business KPIs, or production deployments. While important, these metrics tell you about past performance, not future potential. They're the scoreboard, not the playbook.

I discovered this truth when comparing two teams in our organisation with similar expertise, similar resources, and similar project complexity. One consistently delivered more impactful solutions than the other. The difference wasn't technical brilliance or domain expertise—it was their iteration velocity.

The high-impact team could:

*   Test a hypothesis within hours rather than days
*   Deploy experimental models to staging environments daily
*   Get stakeholder feedback on prototypes weekly
*   Measure real-world impact against metrics within two-week cycles

Their counterparts moved more deliberately: multi-week implementation cycles, monthly deployments, quarterly feedback loops. Both teams eventually reached similar technical outcomes, but the faster team:

*   Delivered value 3-4x faster
*   Explored 5x more potential approaches
*   Abandoned unproductive paths before significant investment
*   Built deeper intuition about what would work through repeated experimentation

I've since restructured all our teams around this principle, measuring and optimising for iteration velocity as our primary leading indicator. This meant investment in:

*   Robust experiment tracking infrastructure
*   Automated evaluation pipelines
*   Streamlined deployment processes
*   Rapid feedback mechanisms with stakeholders
*   Minimising approval bottlenecks

The results have been transformative. Teams that optimise for iteration speed consistently outperform teams that optimise for perfection. They learn faster, pivot more effectively, and ultimately deliver more impactful solutions.

This approach challenges the common emphasis on thoughtful, deliberate development. There's a persistent belief in our field that careful planning and methodical execution lead to better outcomes. My experience suggests the opposite: teams that move quickly and test rigorously—even with imperfect approaches—ultimately build better solutions.

### Practical Steps to Increase Velocity
Some practical ways we've increased iteration velocity:

*   Breaking projects into 2-3 day experimental cycles rather than multi-week sprints
*   Creating standardised evaluation harnesses that automatically generate performance metrics
*   Establishing "guardrail metrics" that must be maintained while experimenting with improvements
*   Developing lightweight stakeholder demos that can be generated from early-stage models
*   Implementing "no meeting Wednesdays" dedicated solely to implementation and testing

The most powerful question I now ask when evaluating a team isn't "How sophisticated is your approach?" but rather "How quickly can you validate whether an idea works?" Teams that can answer "by tomorrow" rather than "next month" are invariably the ones driving the greatest impact.

## Essential Practices for AI Leaders

### Communicating Limitations Effectively
When explaining AI's limitations to stakeholders, I've found success with these approaches:

*   Highlighting the importance of labelled data for supervised learning problems
*   Explaining that machine learning excels at interpolation rather than extrapolation
*   Using demos and visual representations to illustrate concepts clearly

### Championing Engineering Excellence and MLOps
The gap between a quick proof of concept and a production-ready, scalable application is vast. As a leader, you must advocate for proper software engineering and MLOps practices.

This means taking seriously the infrastructure needs that support model workflows and avoiding the technical debt that commonly plagues ML systems—whether related to model versioning, experimental tracking, or drift detection.

## Taking Action: Strengthening Your AI Leadership

If you're leading an AI team or aspiring to do so, start by:

*   Adopting a bidirectional approach that balances business needs with technical realities
*   Questioning whether ML is actually the right solution for your specific problem
*   Creating a culture that celebrates fast failures as learning opportunities
*   Focusing relentlessly on increasing your team's iteration velocity
*   Establishing clear processes for transitioning research to production

The leaders who thrive in AI aren't just technically brilliant—they're exceptional communicators who can set realistic expectations, balance competing priorities, and build adaptable teams in a rapidly evolving landscape.

What steps will you take today to strengthen your AI leadership approach?
