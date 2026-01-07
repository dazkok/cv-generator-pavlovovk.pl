<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>{{ $profile->first_name }} {{ $profile->last_name }} – CV</title>

    <style>
        @page {
            margin: 28mm 20mm;
        }

        body {
            font-family: DejaVu Sans, Arial, sans-serif;
            font-size: 11px;
            color: #111;
            line-height: 1.45;
        }

        h1 {
            font-size: 22px;
            margin: 0 0 4px 0;
            font-weight: 700;
        }

        h2 {
            font-size: 14px;
            margin: 28px 0 10px;
            font-weight: 700;
            text-transform: uppercase;
            border-bottom: 1px solid #ddd;
            padding-bottom: 4px;
        }

        h3 {
            font-size: 12px;
            margin: 0;
            font-weight: 600;
        }

        p {
            margin: 6px 0;
        }

        .header {
            margin-bottom: 18px;
        }

        .title {
            font-size: 13px;
            font-weight: 500;
            color: #444;
        }

        .meta {
            font-size: 10px;
            color: #555;
            margin-top: 6px;
        }

        .meta span {
            margin-right: 12px;
        }

        .item {
            margin-bottom: 14px;
        }

        .item-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
        }

        .item-meta {
            font-size: 10px;
            color: #666;
        }

        .list-inline {
            margin: 6px 0 0;
            padding: 0;
            list-style: none;
        }

        .list-inline li {
            display: inline-block;
            margin-right: 8px;
        }

        .skills-group {
            margin-bottom: 8px;
        }

        .skills-group strong {
            display: inline-block;
            width: 110px;
        }
    </style>
</head>
<body>

{{-- HEADER --}}
<div class="header">
    <h1>{{ $profile->first_name }} {{ $profile->last_name }}</h1>
    <div class="title">{{ $profile->title }}</div>

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
</div>

{{-- SUMMARY --}}
@if($sections->contains('section', 'summary'))
    <p>{{ $profile->summary }}</p>
@endif

{{-- EXPERIENCE --}}
@if($sections->contains('section', 'experience'))
    <h2>Work Experience</h2>

    @foreach($cv->workExperiences as $job)
        <div class="item">
            <div class="item-header">
                <h3>{{ $job->position }} – {{ $job->company }}</h3>
                <div class="item-meta">
{{--                    {{ $job->start_date->format('M Y') }}--}}
{{--                    –--}}
{{--                    {{ $job->is_current ? 'Present' : $job->end_date?->format('M Y') }}--}}
                </div>
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

    @foreach($cv->educations as $edu)
        <div class="item">
            <h3>{{ $edu->institution }}</h3>
            <div class="item-meta">
                {{ $edu->start_year }} – {{ $edu->end_year }}
            </div>
            @if($edu->degree)
                <p>{{ $edu->degree }}</p>
            @endif
        </div>
    @endforeach
@endif

{{-- SKILLS --}}
@if($sections->contains('section', 'skills'))
    <h2>Skills</h2>

    @foreach($cv->skills->groupBy('category') as $category => $skills)
        <div class="skills-group">
            <strong>{{ $category }}:</strong>
            {{ $skills->pluck('name')->implode(', ') }}
        </div>
    @endforeach
@endif

{{-- LANGUAGES --}}
@if($sections->contains('section', 'languages'))
    <h2>Languages</h2>

    <ul class="list-inline">
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

</body>
</html>
