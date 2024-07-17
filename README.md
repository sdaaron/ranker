# 使用GPT-4开发一个信息聚合网站（基于Next.js、Tailwind、Supabase 和 Python）

最近的业余时间，我在做一个用大模型做资讯聚合的日报网站：https://ranker.cc
这个网站前后端纯个人手搓+ChatGPT指点完成，请用大屏打开，体验更佳。
![website_screenshot](https://github.com/sdaaron/ranker-web/blob/main/project-img/website-screenshot.png)

## 背景

最近业余时间在学习网站开发，作为一个产品经理，自学开发并不容易，尤其是如今前端生态工具链和脚手架极为复杂，让我很是头痛。

之前大学时期我就已经尝试学习过一次前端，那次看了HTML、CSS和Javascript等前端基础，还学了一门react课程，但是什么项目都没动手写，所以最终什么也没留下。

这次重新学习，我希望自己能够先有一个想要写的产品，通过完整写完这个产品，来强迫自己学会前端。

正好，最近我一直在思考怎么用LLM来优化信息获取效率的问题。我每天打开手机几十次，就是为了看一下热搜、热榜和朋友圈，生怕自己错过什么重大新闻，怕自己与世界脱节。所以我就想，如果能够有一个LLM能够帮助我阅读整个互联网的信息，它了解我的关注重点和阅读趣味，提前帮我预筛好我想要看的文章，组织成信息流，我拿起手机，看到的就是这样一个高质量、低噪音的时间线，是不是能帮我省很多时间？

于是，有了这个想法，我终于开始动手写我的第一个独立项目。

## 产品构思

对于用 LLM 筛选信息流，可能会有人说，推荐系统不就是为了定制个性化信息流而生的吗？你拿起抖音和今日头条，疯狂刷上一两天，那信息流不就是你喜欢的形状了吗？

对于这个问题，我的观点是，推荐系统瞄准的是我大脑的边缘系统，通过推送感性大脑可能会感兴趣的内容来抓住我，它的OKR是我的观看时长和消费转化，而不是我作为一个人类的信息获取效率和个人成长。

推荐系统由平台掌握、由平台定义、为平台服务，而我需要的是一种由我掌握、由我定义、为我服务的“算法”。

我希望有一个专属阅读助理，它的OKR由我在我最清醒地时候写下，在我意志力薄弱、没有精力去搜集高价值信息的时候，这个助理默默地帮我阅读整个互联网的信息，并且根据我提前写好的Prompt，按照我理性状态下写下的阅读趣味和关注重点，为我组织好信息流。

这个信息流筛选系统由若干条（目前实际有12条）工作流组成，每条工作流由5个环节组成：

1. 信息采集：获取谷歌新闻、HackerNews、Connexun News API（一个新闻聚合API）、TechCrunch、ProductHunt、Github、Arxiv等高质量信息源的每日增量数据。（目前实际数据主要来源于前两者）
2. 信息解析：将这些格式各异的数据转换成规范的JSON形式。
3. 信息评分：根据我手工+ChatGPT的撰写的Prompt，在科技、时事、财经、编程等不同领域按照不同的筛选标准选出最重要的信息。
4. 信息排序：按照上一步的打分返回每个板块的前10条内容。
5. 信息摘要：用简单的语言帮我翻译并概括信息的主要内容。这里只是对源数据API中自带的摘要部分进行了翻译和摘要，文章的主体部分不会进行翻译，如果对文章感兴趣的话可以点击链接阅读原文。

实际上线到 https://ranker.cc 的工作流有一个额外的环节，是一个简单的审核，通过敏感词匹配简单粗暴地屏蔽了一些文章。

目前这样的流水线一共有12条，分别是：大模型、时事、财经、科技、科学、时政、能源、健康、娱乐、运动、HackerNews热门和HackerNews最佳板块。前10个板块都是主题的逻辑，后2个板块是数据源的逻辑，有点混乱，但是由于每天阅读HackerNews对很多互联网的同学来说是刚需，所以暂时先这样尴尬地设置着。

这个项目目前很简单，采集的主要是互联网上每天重要的增量新闻信息，后续如果我有时间开发的话，它的采集视野还会包括更多领域，例如，各行各业的行业日报、近期出现的优质研报、公众号文章、知乎回答、学术论文、Github项目、高水平博客和一些前人汇总的优质RSS源等等，任何优质信息，都可以是它采集的对象。

它可能还会陆续增加筛选互联网优质存量信息的功能，例如：HackerNews历史上评分最高的1000条帖子、知乎各领域最高质量的1000篇回答、公众号出现以来最好的1000篇深度文章、各领域最优质的学习资源，做成一个集中汇总地，供口味挑剔的用户阅读。

使用爬虫+LLM来做一个能够理解并筛选整个互联网的Multi-Agent System的想法非常让人激动，对这个想法感兴趣的还可以看看我去年5月份写的这篇文章：2023年58个海外金融领域AI产品调研——基于GPT3.5驱动的AI爬虫

可能会有的疑虑是，用LLM来筛选互联网文章？这个成本平台能负担起了吗？实际上我通过对信息源进行一些前置限制，目前每天筛选这12个板块的优质信息的成本仅仅是1美元左右。如果有更多用户阅读品味近似，多人共享一个Prompt，未来这个网站也许能够支持用户自己写Prompt来筛选自定义的优质信息流。
![cost_image](https://github.com/sdaaron/ranker-web/blob/main/project-img/cost-screenshot.png)

## 开发过程

项目结构上，这个网站项目非常简单：

1. 一个Python写的Task Server，做成定时任务跑在云上。
2. 定时任务跑完后数据推送到Supabase中，作为服务端。
3. 前端用Next.js开发，部署在Vercel上，从Supabase获取数据。

整个信息筛选的关键流程（评分和摘要）完全由GPT-4+Prompt工程的形式实现，虽然很简单，但是还是利用写这个项目的机会尝试了不少新技术。

1. 项目大量使用了Next.js的SSR，并且用过SSR和CSR结合的方式实现了无限滚动刷新的信息流。
2. TailwindCSS，以前学前端放弃的很大一部分原因是讨厌写CSS，Tailwind的出现使得写样式变成了一件令人心旷神怡的事情，它封装好的原子类让我在没有设计技能的情况下，也能写出还算美观的前端样式。
3. Supabase，太好用了，这个项目除了一个定时任务脚本以外并没有服务端，数据直接从supabase获取。对我来说，最方便地是它还自带一个SQL编辑器，让我可以很轻易地查询、修改我的数据。
4. 云平台，这个项目前端用Vercel部署，后端定时任务用render部署，这让我在没有碰云服务器的前提下完成了整个项目的上线，并且网站随着我的每次git push自动更新，仅仅需要极少量的配置工作。
5. 用Clerk做了一个登录注册功能，虽然目前并没有什么用，但是还挺方便的，实现支持Google、Github和邮箱注册只用了几个小时。

这些新技术的出现以及ChatGPT耐心的帮助让我最终完成了这个网站初版的开发，写完以后我最大的感触就是：在LLM的时代，做一个学习者，真是幸福啊！

## 结语

这个项目目前在国外上线，访问速度较慢，由于它涉及到新闻转载，想要在国内上线可能面临重重困难，后续怎么开发、怎么运营，目前我还在思考中，如果有好的想法欢迎找我交流~
