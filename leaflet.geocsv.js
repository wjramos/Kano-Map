




<!DOCTYPE html>
<html class=" ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>Leaflet.geoCSV/leaflet.geocsv.js at master · joker-x/Leaflet.geoCSV</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="joker-x/Leaflet.geoCSV" name="twitter:title" /><meta content="Leaflet.geoCSV - Plugin para Leaflet que permite cargar un archivo CSV como capa geoJSON // Leaflet plugin for loading a CSV file as geoJSON layer." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/1895563?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/1895563?s=400" property="og:image" /><meta content="joker-x/Leaflet.geoCSV" property="og:title" /><meta content="https://github.com/joker-x/Leaflet.geoCSV" property="og:url" /><meta content="Leaflet.geoCSV - Plugin para Leaflet que permite cargar un archivo CSV como capa geoJSON // Leaflet plugin for loading a CSV file as geoJSON layer." property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="328F9111:0324:8C475D:5327F733" name="octolytics-dimension-request_id" /><meta content="5625810" name="octolytics-actor-id" /><meta content="wjramos" name="octolytics-actor-login" /><meta content="10cc713a8d4717e74d1df944e92d2f0f20ba23cdd5fc4472a01695a4cce15e9a" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="os+iCEvZtcxOIo6RU/gqqpib+w1g8tKfd46owfJaJDo=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-8a247d1ca7f16ee20b1b22975990df30ce83c27a.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-43c85266b41a94cc6a086312256ffbb8b0340a48.css" media="all" rel="stylesheet" type="text/css" />
    


        <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-1a87607f18aafc1a4945718470fbc37ad0d882ea.js" type="text/javascript"></script>
        <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-aaf7c886c869a715c92ab21e6736e72beafc7e90.js" type="text/javascript"></script>
        
        
      <meta http-equiv="x-pjax-version" content="9df1f0bdf66a8c4f67047187583976b8">

        <link data-pjax-transient rel='permalink' href='/joker-x/Leaflet.geoCSV/blob/b448a1f1e825d52739d39418cb4090d47ddd7572/leaflet.geocsv.js'>

  <meta name="description" content="Leaflet.geoCSV - Plugin para Leaflet que permite cargar un archivo CSV como capa geoJSON // Leaflet plugin for loading a CSV file as geoJSON layer." />

  <meta content="1895563" name="octolytics-dimension-user_id" /><meta content="joker-x" name="octolytics-dimension-user_login" /><meta content="7393863" name="octolytics-dimension-repository_id" /><meta content="joker-x/Leaflet.geoCSV" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="7393863" name="octolytics-dimension-repository_network_root_id" /><meta content="joker-x/Leaflet.geoCSV" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/joker-x/Leaflet.geoCSV/commits/master.atom" rel="alternate" title="Recent Commits to Leaflet.geoCSV:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have unread notifications" class="notification-indicator tooltipped tooltipped-s" data-gotokey="n">
        <span class="mail-status unread"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey=" s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="wjramos"
      data-repo="joker-x/Leaflet.geoCSV"
      data-branch="master"
      data-sha="ed8caaa4902337e82a68570812c3954140ed8048"
  >

    <input type="hidden" name="nwo" value="joker-x/Leaflet.geoCSV" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/wjramos" class="name">
        <img alt="wjramos" class=" js-avatar" data-user="5625810" height="20" src="https://avatars2.githubusercontent.com/u/5625810?s=140" width="20" /> wjramos
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped tooltipped-s" href="/logout" data-method="post" id="logout" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="joker-x/Leaflet.geoCSV">This repository</span>
    </li>
      <li>
        <a href="/joker-x/Leaflet.geoCSV/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="os+iCEvZtcxOIo6RU/gqqpib+w1g8tKfd46owfJaJDo=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="7393863" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/joker-x/Leaflet.geoCSV/watchers">
        8
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/joker-x/Leaflet.geoCSV/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" title="Unstar joker-x/Leaflet.geoCSV" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/joker-x/Leaflet.geoCSV/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" title="Star joker-x/Leaflet.geoCSV" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/joker-x/Leaflet.geoCSV/stargazers">
        35
      </a>
  </div>

  </li>


        <li>
          <a href="/joker-x/Leaflet.geoCSV/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of joker-x/Leaflet.geoCSV to your account" aria-label="Fork your own copy of joker-x/Leaflet.geoCSV to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/joker-x/Leaflet.geoCSV/network" class="social-count">12</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/joker-x" class="url fn" itemprop="url" rel="author"><span itemprop="title">joker-x</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/joker-x/Leaflet.geoCSV" class="js-current-repository js-repo-home-link">Leaflet.geoCSV</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/joker-x/Leaflet.geoCSV" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /joker-x/Leaflet.geoCSV">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/joker-x/Leaflet.geoCSV/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /joker-x/Leaflet.geoCSV/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/joker-x/Leaflet.geoCSV/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /joker-x/Leaflet.geoCSV/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/joker-x/Leaflet.geoCSV/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /joker-x/Leaflet.geoCSV/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/joker-x/Leaflet.geoCSV/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /joker-x/Leaflet.geoCSV/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/joker-x/Leaflet.geoCSV/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /joker-x/Leaflet.geoCSV/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/joker-x/Leaflet.geoCSV/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /joker-x/Leaflet.geoCSV/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/joker-x/Leaflet.geoCSV.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/joker-x/Leaflet.geoCSV.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:joker-x/Leaflet.geoCSV.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:joker-x/Leaflet.geoCSV.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/joker-x/Leaflet.geoCSV" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/joker-x/Leaflet.geoCSV" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/joker-x/Leaflet.geoCSV" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save joker-x/Leaflet.geoCSV to your computer and use it in GitHub Desktop." aria-label="Save joker-x/Leaflet.geoCSV to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/joker-x/Leaflet.geoCSV/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download joker-x/Leaflet.geoCSV as a zip file"
                   title="Download joker-x/Leaflet.geoCSV as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:1f11c3d44ff164319efe79b66178beeb -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/joker-x/Leaflet.geoCSV/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/joker-x/Leaflet.geoCSV/blob/gh-pages/leaflet.geocsv.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/joker-x/Leaflet.geoCSV/blob/master/leaflet.geocsv.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/joker-x/Leaflet.geoCSV" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Leaflet.geoCSV</span></a></span></span><span class="separator"> / </span><strong class="final-path">leaflet.geocsv.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="leaflet.geocsv.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/joker-x/Leaflet.geoCSV/contributors/master/leaflet.geocsv.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>6 lines (6 sloc)</span>
          <span class="meta-divider"></span>
        <span>2.574 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w js-conduit-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/joker-x/Leaflet.geoCSV?branch=master&amp;filepath=leaflet.geocsv.js"
               aria-label="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/joker-x/Leaflet.geoCSV/edit/master/leaflet.geocsv.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/joker-x/Leaflet.geoCSV/raw/master/leaflet.geocsv.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/joker-x/Leaflet.geoCSV/blame/master/leaflet.geocsv.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/joker-x/Leaflet.geoCSV/commits/master/leaflet.geocsv.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/joker-x/Leaflet.geoCSV/delete/master/leaflet.geocsv.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm">* Copyright 2013 - GPL</span></div><div class='line' id='LC3'><span class="cm">* Iván Eixarch &lt;ivan@sinanimodelucro.org&gt;</span></div><div class='line' id='LC4'><span class="cm">* https://github.com/joker-x/Leaflet.geoCSV</span></div><div class='line' id='LC5'><span class="cm">*/</span></div><div class='line' id='LC6'><span class="nx">L</span><span class="p">.</span><span class="nx">GeoCSV</span><span class="o">=</span><span class="nx">L</span><span class="p">.</span><span class="nx">GeoJSON</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">options</span><span class="o">:</span><span class="p">{</span><span class="nx">titles</span><span class="o">:</span><span class="p">[</span><span class="s1">&#39;lat&#39;</span><span class="p">,</span><span class="s1">&#39;lng&#39;</span><span class="p">,</span><span class="s1">&#39;popup&#39;</span><span class="p">],</span><span class="nx">latitudeTitle</span><span class="o">:</span><span class="s1">&#39;lat&#39;</span><span class="p">,</span><span class="nx">longitudeTitle</span><span class="o">:</span><span class="s1">&#39;lng&#39;</span><span class="p">,</span><span class="nx">fieldSeparator</span><span class="o">:</span><span class="s1">&#39;;&#39;</span><span class="p">,</span><span class="nx">lineSeparator</span><span class="o">:</span><span class="s1">&#39;\n&#39;</span><span class="p">,</span><span class="nx">deleteDoubleQuotes</span><span class="o">:</span><span class="kc">true</span><span class="p">,</span><span class="nx">firstLineTitles</span><span class="o">:</span><span class="kc">false</span><span class="p">},</span><span class="nx">_propertiesNames</span><span class="o">:</span><span class="p">[],</span><span class="nx">initialize</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">csv</span><span class="p">,</span><span class="nx">options</span><span class="p">){</span><span class="nx">L</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nx">setOptions</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">options</span><span class="p">);</span><span class="nx">L</span><span class="p">.</span><span class="nx">GeoJSON</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">initialize</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">csv</span><span class="p">,</span><span class="nx">options</span><span class="p">)},</span><span class="nx">addData</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">data</span><span class="o">===</span><span class="s1">&#39;string&#39;</span><span class="p">){</span><span class="kd">var</span> <span class="nx">titulos</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">titles</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">firstLineTitles</span><span class="p">){</span><span class="nx">data</span><span class="o">=</span><span class="nx">data</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">lineSeparator</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="o">&lt;</span><span class="mi">2</span><span class="p">)</span><span class="k">return</span><span class="p">;</span><span class="nx">titulos</span><span class="o">=</span><span class="nx">data</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span><span class="nx">data</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">1</span><span class="p">);</span><span class="nx">data</span><span class="o">=</span><span class="nx">data</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">lineSeparator</span><span class="p">);</span><span class="nx">titulos</span><span class="o">=</span><span class="nx">titulos</span><span class="p">.</span><span class="nx">trim</span><span class="p">().</span><span class="nx">split</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">fieldSeparator</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">i</span><span class="o">&lt;</span><span class="nx">titulos</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">i</span><span class="o">++</span><span class="p">){</span><span class="nx">titulos</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">_deleteDoubleQuotes</span><span class="p">(</span><span class="nx">titulos</span><span class="p">[</span><span class="nx">i</span><span class="p">])}</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">titles</span><span class="o">=</span><span class="nx">titulos</span><span class="p">}</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">i</span><span class="o">&lt;</span><span class="nx">titulos</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">i</span><span class="o">++</span><span class="p">){</span><span class="kd">var</span> <span class="nx">prop</span><span class="o">=</span><span class="nx">titulos</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">toLowerCase</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[^\w ]+/g</span><span class="p">,</span><span class="s1">&#39;&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/ +/g</span><span class="p">,</span><span class="s1">&#39;_&#39;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">prop</span><span class="o">==</span><span class="s1">&#39;&#39;</span><span class="o">||</span><span class="nx">prop</span><span class="o">==</span><span class="s1">&#39;_&#39;</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">_propertiesNames</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">prop</span><span class="p">)</span><span class="o">&gt;=</span><span class="mi">0</span><span class="p">)</span><span class="nx">prop</span><span class="o">=</span><span class="s1">&#39;prop-&#39;</span><span class="o">+</span><span class="nx">i</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">_propertiesNames</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span><span class="o">=</span><span class="nx">prop</span><span class="p">}</span><span class="nx">data</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">_csv2json</span><span class="p">(</span><span class="nx">data</span><span class="p">)}</span><span class="nx">L</span><span class="p">.</span><span class="nx">GeoJSON</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">addData</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">data</span><span class="p">)},</span><span class="nx">getPropertyName</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">title</span><span class="p">){</span><span class="kd">var</span> <span class="nx">pos</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">titles</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">title</span><span class="p">),</span><span class="nx">prop</span><span class="o">=</span><span class="s1">&#39;&#39;</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">pos</span><span class="o">&gt;=</span><span class="mi">0</span><span class="p">)</span><span class="nx">prop</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">_propertiesNames</span><span class="p">[</span><span class="nx">pos</span><span class="p">];</span><span class="k">return</span> <span class="nx">prop</span><span class="p">},</span><span class="nx">getPropertyTitle</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">prop</span><span class="p">){</span><span class="kd">var</span> <span class="nx">pos</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">_propertiesNames</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">prop</span><span class="p">),</span><span class="nx">title</span><span class="o">=</span><span class="s1">&#39;&#39;</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">pos</span><span class="o">&gt;=</span><span class="mi">0</span><span class="p">)</span><span class="nx">title</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">titles</span><span class="p">[</span><span class="nx">pos</span><span class="p">];</span><span class="k">return</span> <span class="nx">title</span><span class="p">},</span><span class="nx">_deleteDoubleQuotes</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">cadena</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">deleteDoubleQuotes</span><span class="p">)</span><span class="nx">cadena</span><span class="o">=</span><span class="nx">cadena</span><span class="p">.</span><span class="nx">trim</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^&quot;/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;$/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span><span class="k">return</span> <span class="nx">cadena</span><span class="p">},</span><span class="nx">_csv2json</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">csv</span><span class="p">){</span><span class="kd">var</span> <span class="nx">json</span><span class="o">=</span><span class="p">{};</span><span class="nx">json</span><span class="p">[</span><span class="s2">&quot;type&quot;</span><span class="p">]</span><span class="o">=</span><span class="s2">&quot;FeatureCollection&quot;</span><span class="p">;</span><span class="nx">json</span><span class="p">[</span><span class="s2">&quot;features&quot;</span><span class="p">]</span><span class="o">=</span><span class="p">[];</span><span class="kd">var</span> <span class="nx">titulos</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">titles</span><span class="p">;</span><span class="nx">csv</span><span class="o">=</span><span class="nx">csv</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">lineSeparator</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">num_linea</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">num_linea</span><span class="o">&lt;</span><span class="nx">csv</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">num_linea</span><span class="o">++</span><span class="p">){</span><span class="kd">var</span> <span class="nx">campos</span><span class="o">=</span><span class="nx">csv</span><span class="p">[</span><span class="nx">num_linea</span><span class="p">].</span><span class="nx">trim</span><span class="p">().</span><span class="nx">split</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">fieldSeparator</span><span class="p">),</span><span class="nx">lng</span><span class="o">=</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">campos</span><span class="p">[</span><span class="nx">titulos</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">longitudeTitle</span><span class="p">)]),</span><span class="nx">lat</span><span class="o">=</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">campos</span><span class="p">[</span><span class="nx">titulos</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">latitudeTitle</span><span class="p">)]);</span><span class="k">if</span><span class="p">(</span><span class="nx">campos</span><span class="p">.</span><span class="nx">length</span><span class="o">==</span><span class="nx">titulos</span><span class="p">.</span><span class="nx">length</span><span class="o">&amp;&amp;</span><span class="nx">lng</span><span class="o">&lt;</span><span class="mi">180</span><span class="o">&amp;&amp;</span><span class="nx">lng</span><span class="o">&gt;-</span><span class="mi">180</span><span class="o">&amp;&amp;</span><span class="nx">lat</span><span class="o">&lt;</span><span class="mi">90</span><span class="o">&amp;&amp;</span><span class="nx">lat</span><span class="o">&gt;-</span><span class="mi">90</span><span class="p">){</span><span class="kd">var</span> <span class="nx">feature</span><span class="o">=</span><span class="p">{};</span><span class="nx">feature</span><span class="p">[</span><span class="s2">&quot;type&quot;</span><span class="p">]</span><span class="o">=</span><span class="s2">&quot;Feature&quot;</span><span class="p">;</span><span class="nx">feature</span><span class="p">[</span><span class="s2">&quot;geometry&quot;</span><span class="p">]</span><span class="o">=</span><span class="p">{};</span><span class="nx">feature</span><span class="p">[</span><span class="s2">&quot;properties&quot;</span><span class="p">]</span><span class="o">=</span><span class="p">{};</span><span class="nx">feature</span><span class="p">[</span><span class="s2">&quot;geometry&quot;</span><span class="p">][</span><span class="s2">&quot;type&quot;</span><span class="p">]</span><span class="o">=</span><span class="s2">&quot;Point&quot;</span><span class="p">;</span><span class="nx">feature</span><span class="p">[</span><span class="s2">&quot;geometry&quot;</span><span class="p">][</span><span class="s2">&quot;coordinates&quot;</span><span class="p">]</span><span class="o">=</span><span class="p">[</span><span class="nx">lng</span><span class="p">,</span><span class="nx">lat</span><span class="p">];</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">i</span><span class="o">&lt;</span><span class="nx">titulos</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">i</span><span class="o">++</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">titulos</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span><span class="o">!=</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">latitudeTitle</span><span class="o">&amp;&amp;</span><span class="nx">titulos</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span><span class="o">!=</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">longitudeTitle</span><span class="p">){</span><span class="nx">feature</span><span class="p">[</span><span class="s2">&quot;properties&quot;</span><span class="p">][</span><span class="k">this</span><span class="p">.</span><span class="nx">_propertiesNames</span><span class="p">[</span><span class="nx">i</span><span class="p">]]</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">_deleteDoubleQuotes</span><span class="p">(</span><span class="nx">campos</span><span class="p">[</span><span class="nx">i</span><span class="p">])}}</span><span class="nx">json</span><span class="p">[</span><span class="s2">&quot;features&quot;</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="nx">feature</span><span class="p">)}}</span><span class="k">return</span> <span class="nx">json</span><span class="p">}});</span><span class="nx">L</span><span class="p">.</span><span class="nx">geoCsv</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">csv_string</span><span class="p">,</span><span class="nx">options</span><span class="p">){</span><span class="k">return</span> <span class="k">new</span> <span class="nx">L</span><span class="p">.</span><span class="nx">GeoCSV</span><span class="p">(</span><span class="nx">csv_string</span><span class="p">,</span><span class="nx">options</span><span class="p">)};</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05395s from github-fe134-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

