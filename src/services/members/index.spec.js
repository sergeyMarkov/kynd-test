import MembersService from '@/services/members'

jest.useFakeTimers();

describe('loadMembers', () => {
  it('resolves with an array of members after 2 seconds', async () => {
    const membersPromise = MembersService.loadMembers();
    jest.advanceTimersByTime(2000);
    const members = await membersPromise;

    expect(members).toHaveLength(5);
    expect(members[0]).toEqual(
      {
        id: '02ba442240e4090293a1e634de2aeede',
        firstName: 'Terry',
        lastName: 'Bennett',
        joinedAt: '2021-10-01T10:22:01.0Z',
        lastMessage: `I'm looking for someone to help me do a 20,000 piece jigsaw puzzle. Are you my missing piece?`,
        age: 73,
        memberSince: expect.any(String),
      },
    );

  });
});
