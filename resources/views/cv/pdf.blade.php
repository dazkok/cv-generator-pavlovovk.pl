<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>{{ $profile->first_name }} {{ $profile->last_name }} - CV</title>

    <style>
        @page {
            margin-top: 18mm;
            margin-bottom: 15mm;
            margin-left: 15mm;
            margin-right: 15mm;
        }

        body {
            font-family: DejaVu Sans, Arial, sans-serif;
            font-size: 10.8px; /* ЄДИНИЙ базовий розмір */
            line-height: 1.55;
            color: #1c1c1e;
        }

        /* === HEADINGS === */

        h1 {
            font-size: 26px;
            margin: 0;
            font-weight: 700;
            color: #1f3a5f;
            line-height: 1.1;
        }

        h2 {
            font-size: 11.5px;
            margin: 20px 0 8px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: #374151;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 5px;
        }

        h3 {
            font-size: 11.3px;
            margin: 0;
            font-weight: 600;
            color: #111827;
            line-height: 1.35;
        }

        /* === MAIN CONTENT TEXT (ONE SIZE EVERYWHERE) === */

        p,
        .skill-group,
        ul.clean li {
            font-size: 10.8px;
            line-height: 1.55;
            margin: 4px 0 0;
        }

        .summary {
            font-size: 10.8px;
            margin-bottom: 16px;
            color: #374151;
        }

        /* === META (ONLY SMALLER TEXT) === */

        .meta,
        .item-meta,
        .header-links-col {
            font-size: 9.6px;
            color: #6b7280;
            line-height: 1.4;
        }

        .meta span {
            margin-right: 10px;
        }

        /* === HEADER === */

        .header {
            display: table;
            width: 100%;
            margin-bottom: 22px;
            page-break-inside: avoid;
            page-break-after: avoid;
        }

        .header-table {
            width: 100%;
            border-collapse: collapse;
        }

        .header-photo-col {
            width: 20%;
            vertical-align: middle;
        }

        .header-name-col {
            width: 55%;
            vertical-align: middle;
        }

        .header-links-col {
            width: 25%;
            text-align: right;
            vertical-align: middle;
        }

        .header-links-col a {
            display: block;
            color: #1f3a5f;
            text-decoration: none;
            margin-bottom: 3px;
        }

        .photo-box {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
        }

        .photo-box img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 50%;
        }

        .title {
            font-size: 12px;
            color: #6e6e73;
            margin-top: 4px;
            line-height: 1.3;
        }

        /* === LAYOUT === */

        .content-table {
            width: 100%;
            border-collapse: collapse;
        }

        .left-col {
            width: 68%;
            padding-right: 18px;
            vertical-align: top;
        }

        .right-col {
            width: 32%;
            padding-left: 18px;
            vertical-align: top;
            border-left: 1px solid #e5e7eb;
        }

        /* === ITEMS === */

        .item {
            margin-bottom: 14px;
        }

        .item p {
            margin: 0;
        }

        /* === SKILLS === */

        .skill-group {
            margin-bottom: 8px;
        }

        .skill-group strong {
            display: block;
            font-weight: 600;
            margin-bottom: 2px;
            color: #111827;
        }

        /* === LISTS === */

        ul.clean {
            list-style: none;
            padding: 0;
            margin: 6px 0 0;
        }

        ul.clean li {
            margin-bottom: 3px;
        }
    </style>
</head>
<body>

{{-- HEADER --}}
<div class="header">
    <table class="header-table">
        <tr>
            {{-- PHOTO --}}
            @if($profile->photo)
                <td class="header-photo-col">
                    <div class="photo-box">
                        <img src="{{ public_path($profile->photo) }}" alt="Photo">
                    </div>
                </td>
            @endif

            {{-- NAME + CONTACT --}}
            <td class="header-name-col">
                <h1>{{ $profile->first_name }} {{ $profile->last_name }}</h1>
                @if ($profile->title)
                    <div class="title">{{ $profile->title }}</div>
                @endif

                <div class="meta">
                    @if($profile->location)
                        <span>{{ $profile->location }}</span>
                    @endif
                    @if($profile->email)
                        <span>{{ $profile->email }}</span>
                    @endif
                    @if($profile->phone)
                        <span>{{ $profile->phone }}</span>
                    @endif
                </div>
            </td>

            {{-- LINKS --}}
            <td class="header-links-col">
                @if($profile->website)
                    <a href="{{ $profile->website }}">
                        {{ preg_replace('#^https?://#', '', $profile->website) }}
                    </a>
                @endif

                @if($profile->linkedin)
                    <a href="{{ $profile->linkedin }}">LinkedIn</a>
                @endif

                @if($profile->github)
                    <a href="{{ $profile->github }}">Github</a>
                @endif

                @if($profile->instagram)
                    <a href="{{ $profile->instagram }}">Instagram</a>
                @endif
            </td>
        </tr>
    </table>
</div>

<table class="content-table">
    <tr>
        {{-- LEFT COLUMN --}}
        <td class="left-col">

            {{-- SUMMARY --}}
            @if($sections->contains('section', 'summary') && $profile->summary)
                <p class="summary">{{ $profile->summary }}</p>
            @endif

            {{-- EXPERIENCE --}}
            @if($sections->contains('section', 'experience'))
                <h2>Experience</h2>

                @foreach($cv->workExperiences as $job)
                    <div class="item">
                        <h3>{{ $job->company }}, {{ $job->city }} — {{ $job->position }}</h3>
                        <div class="item-meta">
                            {{ $job->start_date->format('M Y') }} –
                            {{ $job->is_current ? 'Present' : $job->end_date?->format('M Y') }}
                        </div>

                        @if($job->description)
                            <p>{!! nl2br(e($job->description)) !!}</p>
                        @endif
                    </div>
                @endforeach
            @endif

            {{-- EDUCATION --}}
            @if($sections->contains('section', 'education'))
                <h2>Education</h2>

                @foreach($cv->educations->groupBy('institution') as $institution => $educations)
                    <div class="item">
                        <h3>{{ $institution }}</h3>
                        @foreach($educations as $edu)
                            <div class="item-meta">
                                {{ $edu->date_string }}
                            </div>
                            @if($edu->description)
                                <p>{{ $edu->description }}</p>
                            @endif
                        @endforeach
                    </div>
                @endforeach
            @endif
        </td>

        {{-- RIGHT COLUMN --}}
        <td class="right-col">
            {{-- SKILLS --}}
            @if($sections->contains('section', 'skills'))
                <h2 style="margin-top: 0;">Skills</h2>

                @foreach($cv->skills->groupBy('category') as $category => $skills)
                    <div class="skill-group">
                        <strong>{{ $category }}</strong>
                        {{ $skills->pluck('name')->implode(', ') }}
                    </div>
                @endforeach
            @endif

            {{-- LANGUAGES --}}
            @if($sections->contains('section', 'languages'))
                <h2>Languages</h2>
                <ul class="clean">
                    @foreach($cv->languages as $language)
                        <li>{{ $language->name }} ({{ $language->proficiency }})</li>
                    @endforeach
                </ul>
            @endif

            {{-- HOBBIES --}}
            @if($sections->contains('section', 'hobbies'))
                <h2>Hobbies</h2>
                <p>{{ $cv->hobbies->pluck('name')->implode(', ') }}</p>
            @endif
        </td>
    </tr>
</table>

</body>
</html>
