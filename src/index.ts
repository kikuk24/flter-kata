export class FilterKata {
  private jorok: string[] = [];

  tambah(kataList: string[]): void {
    this.jorok.push(...kataList);
  }

  cek(teks: string): boolean {
    const lower = teks.toLowerCase();
    return this.jorok.some(kata => lower.includes(kata));
  }

  sensor(teks: string, mask: string = '*'): string {
    let hasil = teks;
    this.jorok.forEach(kata => {
      const regex = new RegExp(kata, 'gi');
      hasil = hasil.replace(regex, mask.repeat(kata.length));
    });
    return hasil;
  }

  daftar(): string[] {
    return [...this.jorok];
  }

  hapus(kataList: string[]): void {
    this.jorok = this.jorok.filter(k => !kataList.includes(k));
  }
}
