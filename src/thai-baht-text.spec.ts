import { ThaiBaht } from './thai-baht-text';

describe('Thai Baht Text', () => {
  it('should be a function', () => {
    expect(ThaiBaht).toEqual(expect.any(Function));
  });

  it('should not convert very small amount', () => {
    expect(ThaiBaht(0.0001)).toEqual('');
    expect(ThaiBaht(0.001)).toEqual('');
    expect(ThaiBaht(0.009)).toEqual('');
  });

  it('should convert to Satang', () => {
    expect(ThaiBaht(0.01)).toEqual('หนึ่งสตางค์');
    expect(ThaiBaht(0.1)).toEqual('สิบสตางค์');
    expect(ThaiBaht(0.1)).toEqual('สิบสตางค์');
    expect(ThaiBaht(0.11)).toEqual('สิบเอ็ดสตางค์');
    expect(ThaiBaht(0.12)).toEqual('สิบสองสตางค์');
    expect(ThaiBaht(0.123)).toEqual('สิบสองสตางค์');
    expect(ThaiBaht(0.2)).toEqual('ยี่สิบสตางค์');
    expect(ThaiBaht(0.2)).toEqual('ยี่สิบสตางค์');
    expect(ThaiBaht(0.21)).toEqual('ยี่สิบเอ็ดสตางค์');
    expect(ThaiBaht(0.25)).toEqual('ยี่สิบห้าสตางค์');
    expect(ThaiBaht(0.255)).toEqual('ยี่สิบห้าสตางค์');
    expect(ThaiBaht(0.5)).toEqual('ห้าสิบสตางค์');
    expect(ThaiBaht(0.75)).toEqual('เจ็ดสิบห้าสตางค์');
    expect(ThaiBaht(0.99)).toEqual('เก้าสิบเก้าสตางค์');
    expect(ThaiBaht(0.999)).toEqual('เก้าสิบเก้าสตางค์');
  });

  it('should convert to Baht', () => {
    expect(ThaiBaht(1)).toEqual('หนึ่งบาทถ้วน');
    expect(ThaiBaht(10)).toEqual('สิบบาทถ้วน');
    expect(ThaiBaht(11)).toEqual('สิบเอ็ดบาทถ้วน');
    expect(ThaiBaht(12)).toEqual('สิบสองบาทถ้วน');
    expect(ThaiBaht(20)).toEqual('ยี่สิบบาทถ้วน');
    expect(ThaiBaht(21)).toEqual('ยี่สิบเอ็ดบาทถ้วน');
    expect(ThaiBaht(22)).toEqual('ยี่สิบสองบาทถ้วน');
    expect(ThaiBaht(100)).toEqual('หนึ่งร้อยบาทถ้วน');
    expect(ThaiBaht(101)).toEqual('หนึ่งร้อยเอ็ดบาทถ้วน');
    expect(ThaiBaht(111)).toEqual('หนึ่งร้อยสิบเอ็ดบาทถ้วน');
    expect(ThaiBaht(121)).toEqual('หนึ่งร้อยยี่สิบเอ็ดบาทถ้วน');
  });

  it('should convert big number to Baht', () => {
    expect(ThaiBaht(1000000)).toEqual('หนึ่งล้านบาทถ้วน');
    expect(ThaiBaht(1000001)).toEqual('หนึ่งล้านเอ็ดบาทถ้วน');
    expect(ThaiBaht(11000001)).toEqual('สิบเอ็ดล้านเอ็ดบาทถ้วน');
    expect(ThaiBaht(11000000)).toEqual('สิบเอ็ดล้านบาทถ้วน');
  });

  it('should convert multiple million round to Baht', () => {
    expect(ThaiBaht(1000000000000000000)).toEqual('หนึ่งล้านล้านล้านบาทถ้วน');
    expect(ThaiBaht(1000000000001)).toEqual('หนึ่งล้านล้านเอ็ดบาทถ้วน');
    expect(ThaiBaht(1000000000000)).toEqual('หนึ่งล้านล้านบาทถ้วน');
    expect(ThaiBaht(1001000000001)).toEqual('หนึ่งล้านหนึ่งพันล้านเอ็ดบาทถ้วน');
    expect(ThaiBaht(1001000001001)).toEqual(
      'หนึ่งล้านหนึ่งพันล้านหนึ่งพันเอ็ดบาทถ้วน',
    );
    expect(ThaiBaht(1001000000000)).toEqual('หนึ่งล้านหนึ่งพันล้านบาทถ้วน');
    expect(ThaiBaht(1000000000)).toEqual('หนึ่งพันล้านบาทถ้วน');
    expect(ThaiBaht(10000000)).toEqual('สิบล้านบาทถ้วน');
    expect(ThaiBaht(100000000)).toEqual('หนึ่งร้อยล้านบาทถ้วน');
  });

  it('should convert complex number to Baht', () => {
    expect(ThaiBaht(6321298)).toEqual(
      'หกล้านสามแสนสองหมื่นหนึ่งพันสองร้อยเก้าสิบแปดบาทถ้วน',
    );
    expect(ThaiBaht(10034567)).toEqual(
      'สิบล้านสามหมื่นสี่พันห้าร้อยหกสิบเจ็ดบาทถ้วน',
    );
    expect(ThaiBaht(20034567)).toEqual(
      'ยี่สิบล้านสามหมื่นสี่พันห้าร้อยหกสิบเจ็ดบาทถ้วน',
    );
    expect(ThaiBaht(30034567.0)).toEqual(
      'สามสิบล้านสามหมื่นสี่พันห้าร้อยหกสิบเจ็ดบาทถ้วน',
    );
  });

  it('should convert number to Baht with Satang', () => {
    expect(ThaiBaht(11.25)).toEqual('สิบเอ็ดบาทยี่สิบห้าสตางค์');
    expect(ThaiBaht(100.5)).toEqual('หนึ่งร้อยบาทห้าสิบสตางค์');
    expect(ThaiBaht(567.01)).toEqual('ห้าร้อยหกสิบเจ็ดบาทหนึ่งสตางค์');
    expect(ThaiBaht(123456789.999)).toEqual(
      'หนึ่งร้อยยี่สิบสามล้านสี่แสนห้าหมื่นหกพันเจ็ดร้อยแปดสิบเก้าบาทเก้าสิบเก้าสตางค์',
    );
  });
});
