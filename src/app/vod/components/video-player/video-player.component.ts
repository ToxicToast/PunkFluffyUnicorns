import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @Input() state: any;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  getEmbedUrl(videoId) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`http://www.youtube.com/embed/${videoId}?autoplay=1`);
  }

}
